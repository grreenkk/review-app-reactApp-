import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {

    const HeaderColor = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={HeaderColor}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )

}

/**This gives extra type checking for your props */
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}


/**This is how to set a default prop in a component */
Header.defaultProps = {
    text: "Hello Africa",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

export default Header