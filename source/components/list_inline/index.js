// Dependencies.
import React from 'react'

// Utility methods.
import fake from '../../fake'

// Define class.
class ListInline extends React.Component {
  // Render method.
  render () {
    return (
      <ul className='t7-list-inline'>
        {this.props.children}
      </ul>
    )
  }
}

// Validation.
ListInline.propTypes = {
  children: React.PropTypes.node
}

// Defaults.
ListInline.defaultProps = {
  children: fake.list()
}

// Export.
export default ListInline
