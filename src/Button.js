import PropTypes from 'prop-types'

export function Button({text, text2}){
    return <button>
        {text} - {text2}
    </button>
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
    text2: "Default"
}