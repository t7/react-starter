// Dependencies.
import React from 'react'

// UI components.
import CheckboxList from '../form_checkbox_list'

// Define class.
class CheckboxListInline extends React.Component {
  // Render method.
  render () {
    return (
      <CheckboxList {...this.props} />
    )
  }
}

// Prop defaults.
CheckboxListInline.defaultProps = {
  inline: true,
  options: [
    {
      defaultChecked: true,
      label: 'Checkbox list inline - label 01'
    },
    {
      label: 'Checkbox list inline - label 02'
    },
    {
      disabled: true,
      label: '(Checkbox disabled)'
    }
  ]
}

// Export.
export default CheckboxListInline
