import { createComponentClasses } from '../utils/componentClassesMaker'

export default (props) => {
    const componentClasses = createComponentClasses(props)
    return (
        <div className={`w3-container ${componentClasses}`}>
            {props.children}
        </div>
    )
}