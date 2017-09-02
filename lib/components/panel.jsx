import { createComponentClasses } from '../utils/componentClassesMaker'

export default (props) => {
    const componentClasses = createComponentClasses(props)
    return (
        <div className={`w3-panel ${componentClasses}`}>
            {props.children}
        </div>
    )
}