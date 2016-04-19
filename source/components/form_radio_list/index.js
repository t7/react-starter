// Dependencies.
import React from 'react'
import { findIndex } from 'lodash'

// Utility methods.
import utils from '../../utils'

// UI components.
import Radio from '../form_radio'
import ListClean from '../list_clean'
import ListInline from '../list_inline'

// Define class.
class RadioList extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    const options = this.props.options

    const checkedIndex = findIndex(options, function (item) {
      return item.checked || item.defaultChecked
    })

    const listName = this.props.listName || utils.unique()

    this.state = {
      checkedIndex: checkedIndex,
      listName: listName
    }
  }

  // Render method.
  render () {
    // State driven.
    const checkedIndex = this.state.checkedIndex
    const listName = this.state.listName

    // Props driven.
    const inline = this.props.inline
    const options = this.props.options

    // Used in conditional.
    var List = ListClean

    if (inline) {
      List = ListInline
    }

    // Events.
    const handleChange = this.props.handleChange
    const setState = this.setState.bind(this)

    // Build list.
    const listItems = options.map(function (o, i) {
      const autofocus = o.autofocus
      const disabled = o.disabled
      const id = o.id
      const label = o.label
      const name = o.name || listName
      const required = o.required
      const value = o.value

      // Matching index?
      const checked = checkedIndex === i

      return (
        <li key={i}>
          <Radio
            autofocus={autofocus}
            disabled={disabled}
            id={id}
            label={label}
            name={name}
            required={required}
            value={value}

            // Control checked.
            checked={checked}

            // Click event.
            handleChange={function (e, value, checked) {
              // Change index.
              setState({
                checkedIndex: i
              })

              // Does callback exist?
              if (typeof handleChange === 'function') {
                handleChange(e, value, checked)
              }
            }}
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
RadioList.propTypes = {
  inline: React.PropTypes.bool,
  listName: React.PropTypes.string,
  options: React.PropTypes.array,

  // Events.
  handleChange: React.PropTypes.func
}

// Export.
export default RadioList
