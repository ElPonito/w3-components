export default ({children, color}) => (
    <div className={`w3-container ${color ? color : ''}`}>
        {children}
    </div>
)