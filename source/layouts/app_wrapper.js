// Dependencies.
import React from 'react'

// Define class.
class Wrapper extends React.Component {
  // Render method.
  render () {
    return (
      <div className='t7-app__wrapper'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
Wrapper.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default Wrapper
