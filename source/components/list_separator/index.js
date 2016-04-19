// Dependencies.
import React from 'react'

// Utility methods.
import fake from '../../fake'

// Define class.
class ListSeparator extends React.Component {
  // Render method.
  render () {
    return (
      <ul className='t7-list-separator'>
        {this.props.children}
      </ul>
    )
  }
}

// Validation.
ListSeparator.propTypes = {
  children: React.PropTypes.node
}

// Defaults.
ListSeparator.defaultProps = {
  children: fake.list()
}

// Export.
export default ListSeparator
