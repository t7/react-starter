// Dependencies.
import React from 'react'

// UI components.
import Checkbox from '../form_checkbox'
import ListClean from '../list_clean'
import ListInline from '../list_inline'

// Define class.
class CheckboxList extends React.Component {
  // Render method.
  render () {
    const inline = this.props.inline
    const options = this.props.options

    // Used in conditional.
    let List = ListClean

    if (inline) {
      List = ListInline
    }

    // Events.
    const handleChange = this.props.handleChange

    // Build list.
    const listItems = options.map(function (o, i) {
      const autofocus = o.autofocus
      const checked = o.checked
      const defaultChecked = o.defaultChecked
      const disabled = o.disabled
      const id = o.id
      const label = o.label
      const name = o.name
      const required = o.required
      const value = o.value

      return (
        <li key={i}>
          <Checkbox
            autofocus={autofocus}
            disabled={disabled}
            id={id}
            label={label}
            name={name}
            required={required}
            value={value}

            checked={checked}
            defaultChecked={defaultChecked}

            handleChange={handleChange}
          />
        </li>
      )
    })

    // Expose UI.
    return (
      <List>
        {listItems}
      </List>
    )
  }
}

// Validation.
CheckboxList.propTypes = {
  inline: React.PropTypes.bool,
  options: React.PropTypes.array,

  // Events.
  handleChange: React.PropTypes.func
}

// Export.
export default CheckboxList
