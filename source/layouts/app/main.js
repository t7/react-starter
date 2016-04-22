// Dependencies.
import React from 'react'

// Define class.
class AppMain extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <main role='main' className='t7-app__main'>
        {this.props.children}
      </main>
    )
  }
}

// Validation.
AppMain.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default AppMain
