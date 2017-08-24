import { createComponentClasses } from '../utils'

export default ({children, options}) => {
    const optionalClasses = createComponentClasses(options)
    return (
        <div className={`w3-panel ${optionalClasses}`}>
            {children}
        </div>
    )
}