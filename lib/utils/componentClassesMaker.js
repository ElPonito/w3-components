import componentOptions from '../componentOptions'

export const createComponentClasses = options =>
    Object.entries(options)
        .reduce((result, [optionName, optionValue], index) =>
            `${result}${result.length === 0 ? '' : ' '}${createComponentClassesForAnOption(optionName, optionValue)}`, '')

const createComponentClassesForAnOption = (optionName, optionValue) => {
    if (optionName === 'children') return
    if (!Array.isArray(optionValue)) {
        return `${componentOptions[optionName] && componentOptions[optionName][optionValue] ? `${componentOptions[optionName][optionValue]}` : ''}`
    }
    return createComponentClassesFromArray(optionName, optionValue)
}

const createComponentClassesFromArray = (optionName, optionValue) => {
    return optionValue.reduce((result, value, index) => {
        if (typeof value === 'object') {
            const [key, optionValue] = Object.entries(value)[0]
            const template = componentOptions[optionName][key]
            return `${result} ${createComponentClassFromTemplate(template, optionValue, optionName)}`
        }
        return `${result}${componentOptions[optionName] && componentOptions[optionName][value] ? `${index === 0 ? '' : ' '}${componentOptions[optionName][value]}` : ''}`
    }, '')
}

const createComponentClassFromTemplate = (template, optionValue, componentOptionType) => {
    const optionKey = extractKeyFromTemplate(template)
    const genericClass = extractGenericClassFromTemplate(template)
    return `${genericClass}${componentOptions[componentOptionType][optionKey][optionValue]}`
}

const extractKeyFromTemplate = (str, keyFirstPart = '${', keySecondPart = '}') =>
    str.indexOf(keyFirstPart) < str.indexOf(keySecondPart) ? str.split('${')[1].split('}')[0] : ''

const extractGenericClassFromTemplate = (str, keyFirstPart = '${', keySecondPart = '}') =>
    str.indexOf(keyFirstPart) < str.indexOf(keySecondPart) ? str.split('${')[0] : ''