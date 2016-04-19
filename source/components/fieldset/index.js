// Dependencies.
import React from 'react'

// UI components.
import Box from '../box'

// Define class.
class Fieldset extends React.Component {
  // Render method.
  render () {
    const legend = this.props.legend

    return (
      <Box {...this.props} legend={legend} />
    )
  }
}

// Validation.
Fieldset.propTypes = {
  legend: React.PropTypes.string
}

// Defaults.
Fieldset.defaultProps = {
  legend: 'Fieldset Legend',
  children: '(Form elements would go here.)',
  close: false,
  icon: false
}

// Export.
export default Fieldset
