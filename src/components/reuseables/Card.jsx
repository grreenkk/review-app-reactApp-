import PropTypes from 'prop-types'

const Card = ({children, reverse}) => {
    return(
        <div className='card' style={{backgroundColor: reverse ?'black' : '#fff', color: reverse ? 'white' : 'black'}}>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.PropTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
    
}

export default Card