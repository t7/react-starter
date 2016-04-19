// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Radio extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    this.state = {
      id: this.props.id || utils.unique()
    }
  }

  handleChange (e) {
    const handleChange = this.props.handleChange

    // Exit, if no callback.
    if (typeof handleChange !== 'function') {
      return
    }

    const el = e.target
    const checked = el.checked
    const value = utils.trim(el.value)

    handleChange(e, value, checked)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const label = this.props.label
    const name = this.props.name || id
    const required = this.props.required
    const value = this.props.value || this.props.label

    // Control checked state.
    const defaultChecked = this.props.defaultChecked
    const checked = this.props.checked

    // Events.
    const handleChange = this.handleChange.bind(this)

    return (
      <label htmlFor={id}>
        <input
          autoFocus={autofocus}
          className='t7-form__radio'
          disabled={disabled}
          id={id}
          name={name}
          type='radio'
          required={required}
          value={value}

          checked={checked}
          defaultChecked={defaultChecked}

          onChange={handleChange}
        />
        {label}
      </label>
    )
  }
}

// Validation.
Radio.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  required: React.PropTypes.bool,

  // Alphanumeric.
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Control checked state.
  defaultChecked: React.PropTypes.bool,
  checked: React.PropTypes.bool,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Radio.defaultProps = {
  label: 'Individual radio label'
}

// Export.
export default Radio