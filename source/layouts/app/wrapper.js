// Dependencies.
import React from 'react'

// Define class.
class AppWrapper extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <div className='t7-app__wrapper'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
AppWrapper.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default AppWrapper
