// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// Misc components.
import Grid from '../components_misc/unsemantic/grid_unit'
import GridContainer from '../components_misc/unsemantic/grid_container'
import ListSeparator from '../components/list_separator'

// UI components.
import Search from '../components/form_search'

// Define class.
class Header extends React.Component {
  // Render method.
  render () {
    return (
      <header className='t7-app__header' role='banner'>
        <GridContainer>
          <Grid desktop='25' tablet='25'>
            <Link to='/' className='t7-app__header__logo'>
              ACME
            </Link>
          </Grid>
          <Grid desktop='50' tablet='50'>
            <ListSeparator>
              <li>
                <Link to='/'>Accounts</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <a href='https://github.com/t7/react-starter'>GitHub</a>
              </li>
            </ListSeparator>
          </Grid>
          <Grid desktop='25' tablet='25'>
            <Search />
          </Grid>
        </GridContainer>
      </header>
    )
  }
}

// Export.
export default Header
