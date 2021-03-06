// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Markdown extends React.Component {
  // Render method.
  render () {
    return (
      <div
        dangerouslySetInnerHTML={
          utils.markdown(
            require(
              'raw!../../docs/' +
              this.props.file.split('.')[0] +
              '.md'
            )
          )
        }
      />
    )
  }
}

// Validation.
Markdown.propTypes = {
  file: React.PropTypes.string
}

// Export.
export default Markdown
