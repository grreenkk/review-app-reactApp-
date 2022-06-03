import PropTypes from 'prop-types'

const Header = ({text}) => {
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )

}

/**This gives extra type checking for your props */
// Header.propTypes = {
//     text: PropTypes.array.isRequired
// }


/**This is how to set a default prop in a component */
// Header.defaultProps = {
//     text: "Hello Africa"
// }

export default Header