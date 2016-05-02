// Dependencies.
import React from 'react'
import { Grid, GridContainer } from 'unsemantic'

// Utility methods.
import utils from '../../utils'

// Layout components.
import App from '../../layouts/app'

// Misc components.
import Markdown from '../../components_misc/markdown/text'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(props)
  }

  // Render method.
  render () {
    // Expose UI.
    return (
      <App>

        <GridContainer>

          <Grid desktop='100'>

            <Markdown file='doc_404.md' />

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
