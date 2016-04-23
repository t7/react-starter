// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Textdiv extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    this.state = {
      value: this.props.value || this.props.defaultValue,
      id: this.props.id || utils.unique()
    }
  }

  // Force state change.
  componentWillReceiveProps (nextProps) {
    const newValue = nextProps.value
    const oldValue = this.props.value

    const isValid =
      utils.exists(newValue) &&
      newValue !== oldValue

    if (isValid) {
      this.setState({
        value: newValue
      })
    }
  }

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
  }

  // When input gains focus.
  handleFocus (e) {
    utils.convertContentFocus(e)
  }

  // When input loses focus.
  handleBlur (e) {
    utils.convertContentEditable(e)
    this.handleChange(e)
  }

  // When user types.
  handleKeyUp (e) {
    utils.convertContentEditable(e)
    this.handleChange(e)
  }

  // When user pastes text.
  handlePaste (e) {
    utils.convertOnPaste(e)
    this.handleChange(e)
  }

  // When value changes.
  handleChange (e) {
    const handleChange = this.props.handleChange

    // Exit, if no callback.
    if (typeof handleChange !== 'function') {
      return
    }

    const el = e.target
    const value = utils.convertToText(el.innerHTML)

    handleChange(e, value)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const required = this.props.required

    var value = this.state.value

    if (!value && placeholder) {
      value = placeholder
    }

    value = utils.convertToMarkup(value)

    // Events.
    const handleBlur = this.handleBlur.bind(this)
    const handleChange = this.handleChange.bind(this)
    const handleFocus = this.handleFocus.bind(this)
    const handleKeyUp = this.handleKeyUp.bind(this)
    const handlePaste = this.handlePaste.bind(this)

    return (
      <div
        autoFocus={autofocus}
        className='t7-form__textarea'
        contentEditable={!disabled}
        dangerouslySetInnerHTML={{__html: value}}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}

        onBlur={handleBlur}
        onInput={handleChange}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        onPaste={handlePaste}
      />
    )
  }
}

// Validation.
Textdiv.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,

  // Default value.
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Forced value.
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Textdiv.defaultProps = {
  placeholder: '',

  // Control text value.
  defaultValue: '',
  value: ''
}

// Export.
export default Textdiv
