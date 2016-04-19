// Dependencies.
import React from 'react'

// UI components.
import Wrapper from './app_wrapper'
import Header from './app_header'
import Main from './app_main'
import Footer from './app_footer'

// Define class.
class App extends React.Component {
  // Render method.
  render () {
    return (
      <div className='t7-app'>
        <Wrapper>
          <Header />
          <Main>
            {this.props.children}
          </Main>
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

// Validation.
App.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default App
