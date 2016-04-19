// Dependencies.
import React from 'react'

// Define class.
class GridOffset extends React.Component {
  render () {
    return (
      <div className='grid-offset'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
GridOffset.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default GridOffset
