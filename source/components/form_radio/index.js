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
    let checked = this.props.checked

    // Ensure a real boolean.
    if (!utils.exists(checked)) {
      checked = this.props.defaultChecked || false
    }

    this.state = {
      checked: checked,
      id: this.props.id || utils.unique()
    }
  }

  // Force state change.
  componentWillReceiveProps (nextProps) {
    const newChecked = nextProps.checked
    const oldChecked = this.props.checked

    const isValid =
      utils.exists(newChecked) &&
      newChecked !== oldChecked

    if (isValid) {
      this.setState({
        checked: newChecked
      })
    }
  }

  handleChange (e) {
    const el = e.target
    const checked = el.checked
    const value = utils.trim(el.value)
    const handleChange = this.props.handleChange

    this.setState({
      checked: checked
    })

    // Exit, if no callback.
    if (typeof handleChange === 'function') {
      handleChange(e, value, checked)
    }
  }

  // Render method.
  render () {
    // State driven.
    const checked = this.state.checked
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const label = this.props.label
    const name = this.props.name || id
    const required = this.props.required
    const value = this.props.value || label

    // Events.
    const handleChange = this.handleChange.bind(this)

    return (
      <label
        htmlFor={id}
        className='t7-form__radio__label'
      >
        <input
          autoFocus={autofocus}
          className='t7-form__radio'
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          type='radio'
          value={value}

          checked={checked}
          onChange={handleChange}
        />
        <span className='t7-form__radio__fake' />
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
