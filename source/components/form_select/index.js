// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Select extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    var value = this.props.value

    if (!utils.exists(value)) {
      value = this.props.defaultValue
    }

    this.state = {
      id: this.props.id || utils.unique(),
      value: value
    }
  }

  // Override value.
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

  // Input value change.
  handleChange (e) {
    const value = e.target.value

    this.setState({
      value: value
    })

    // Change callback.
    const handleChange = this.props.handleChange

    // Does callback exist?
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
    const ariaControls = this.props.ariaControls
    const disabled = this.props.disabled
    const name = this.props.name || id
    const options = this.props.options
    const readonly = this.props.readonly
    const required = this.props.required
    const width = this.props.width

    // Events.
    const handleChange = this.handleChange.bind(this)

    // Default class="…".
    var className = ['t7-form__select']

    if (width === 'auto') {
      className.push('t7-form__select--width-auto')
    }

    // Convert to string.
    className = className.join(' ')

    // Build list.
    const listItems = options.map(function (o, i) {
      const value =
        utils.exists(o.value)
        ? o.value
        : o.id

      const name = o.name

      return (
        <option
          key={i}
          value={value}
        >
          {name}
        </option>
      )
    })

    // Expose UI.
    return (
      <select
        aria-controls={ariaControls}
        autoFocus={autofocus}
        className={className}
        disabled={disabled}
        id={id}
        name={name}
        readOnly={readonly}
        required={required}

        value={value}

        onChange={handleChange}
      >
        {listItems}
      </select>
    )
  }
}

// Validation.
Select.propTypes = {
  ariaControls: React.PropTypes.string,
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  options: React.PropTypes.array,
  readonly: React.PropTypes.bool,
  required: React.PropTypes.bool,
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
Select.defaultProps = {
  options: [
    {
      value: '',
      name: 'Select...'
    },
    {
      value: '1',
      name: 'Uno'
    },
    {
      value: '2',
      name: 'Dos'
    },
    {
      value: '3',
      name: 'Tres'
    }
  ]
}

// Export.
export default Select
