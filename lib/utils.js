import componentOptions from './componentOptions'

export const createComponentClasses = options =>
    Object.entries(options)
          .reduce((result, [key, value]) =>
              `${result}${componentOptions[key][value] ? ` ${componentOptions[key][value]}` : '' }`, ''
          )
