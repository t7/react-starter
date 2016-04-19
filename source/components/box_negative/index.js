// Dependencies.
import React from 'react'

// UI components.
import Box from '../box'

// Define class.
class BoxNegative extends React.Component {
  // Render method.
  render () {
    return (
      <Box {...this.props} mode='negative' />
    )
  }
}

// Defaults.
BoxNegative.defaultProps = {
  children: 'Something bad happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxNegative
