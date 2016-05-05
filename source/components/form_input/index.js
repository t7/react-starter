// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Input extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    var value = this.props.value

    // Ensure a real value.
    if (!utils.exists(value)) {
      value = this.props.defaultValue || ''
    }

    this.state = {
      id: this.props.id || utils.unique(),
      value: value
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

  // When input loses focus.
  handleBlur (e) {
    const value = utils.trim(e.target.value)

    this.setState({
      value: value
    })

    const handleChange = this.props.handleChange

    // Exit, if no callback.
    if (typeof handleChange === 'function') {
      handleChange(e, value)
    }
  }

  // When value changes.
  handleChange (e) {
    var value = e.target.value

    this.setState({
      value: value
    })

    const handleChange = this.props.handleChange

    // Exit, if no callback.
    if (typeof handleChange === 'function') {
      value = utils.trim(value)
      handleChange(e, value)
    }
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id
    const value = this.state.value

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const maxlength = this.props.maxlength
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const readonly = this.props.readonly
    const required = this.props.required
    const size = this.props.size
    const type = this.props.type
    const width = this.props.width

    // Default class name.
    var className = ['t7-form__input']

    if (width === 'auto') {
      className.push('t7-form__input--width-auto')
    }

    className = className.join(' ')

    // Events.
    const handleBlur = this.handleBlur.bind(this)
    const handleChange = this.handleChange.bind(this)

    return (
      <input
        autoFocus={autofocus}
        className={className}
        disabled={disabled}
        id={id}
        maxLength={maxlength}
        name={name}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        size={size}
        type={type}

        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    )
  }
}

// Validation.
Input.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  maxlength: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  readonly: React.PropTypes.bool,
  required: React.PropTypes.bool,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  width: React.PropTypes.string,

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
Input.defaultProps = {
  type: 'text'
}

// Export.
export default Input
