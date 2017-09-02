import { createComponentClasses } from '../utils/componentClassesMaker'

export default (props) => {
    const componentClasses = createComponentClasses(props)
    const cardType = props.largeShadow ? `w3-card-4` : 'w3-card'
    return (
        <div className={`${cardType} ${componentClasses}`}>
            {props.children}
        </div>
    )
}