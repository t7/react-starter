// Dependencies.
import React from 'react'

// UI components.
import Box from '../box'

// Define class.
class BoxWarn extends React.Component {
  // Render method.
  render () {
    return (
      <Box {...this.props} mode='warn' />
    )
  }
}

// Defaults.
BoxWarn.defaultProps = {
  children: 'Something "meh" happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxWarn
