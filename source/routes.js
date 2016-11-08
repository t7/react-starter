// Dependencies.
import React from 'react'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

// Pages.
import Accounts from './pages/accounts'
import Profile from './pages/profile'
import NotFound from './pages/404'

// History tracking.
const history =
useRouterHistory(createHashHistory)({queryKey: false})

// Match routes to pages.
const routes = (
  <Router history={history}>

    <Route
      path='/'
      component={Accounts}
      title='Bank Accounts'
    />

    <Route
      path='/profile'
      component={Profile}
      title='User Profile'
    />

    <Route
      path='*'
      component={NotFound}
      title='Page Not Found'
    />

  </Router>
)

// Expose routes.
export default routes
