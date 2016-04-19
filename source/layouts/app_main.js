// Dependencies.
import React from 'react'

// Define class.
class Main extends React.Component {
  // Render method.
  render () {
    return (
      <main role='main' className='t7-app__main'>
        {this.props.children}
      </main>
    )
  }
}

// Validation.
Main.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default Main
