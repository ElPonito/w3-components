export default ({children, largeShadow, color}) => {
    const cardType = largeShadow ? `w3-card-4` : 'w3-card'
    return (
        <div className={`${cardType} ${color ? color : ''}`}>
            {children}
        </div>
    )
}