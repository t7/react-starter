// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Input extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    utils.bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    let value = this.props.value

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

  // Input loses focus.
  handleBlur (e) {
    // Props.
    const handleChange = this.props.handleChange

    // Trim value.
    const value = utils.trim(e.target.value)

    // Update value.
    this.setState({value})

    // Fire callback.
    if (typeof handleChange === 'function') {
      handleChange(e, value)
    }
  }

  // Input value change.
  handleChange (e) {
    // Props.
    const handleChange = this.props.handleChange

    // Get value.
    const value = e.target.value

    // Update value.
    this.setState({value})

    // Fire callback.
    if (typeof handleChange === 'function') {
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
    let className = ['t7-form__input']

    if (width === 'auto') {
      className.push('t7-form__input--width-auto')
    }

    className = className.join(' ')

    // Events.
    const handleBlur = this.handleBlur
    const handleChange = this.handleChange

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
