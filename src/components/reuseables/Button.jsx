import PropTypes from 'prop-types'


const Button = ({children, type, isDisable, version,}) => {
    return(<button type={type} disabled={isDisable} className={`btn btn-${version}`}>
        {children}
    </button>)
}

Button.PropTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    version: 'string',
    isDisable: 'bool'
}

Button.defaultProps = {
    type: 'text',
    disable: false,
    version: 'primary'

}
export default Button