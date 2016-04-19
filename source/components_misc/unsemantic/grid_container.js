// Dependencies.
import React from 'react'

// Define class.
class GridContainer extends React.Component {
  render () {
    return (
      <div className='grid-container'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
GridContainer.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default GridContainer
