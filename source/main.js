import React from 'react'
import { Router } from 'react-router'

var rootRoute = {
  component: 'body',
  childRoutes: [{
    path: '/',
    component: require('./App'),
    childRoutes: [
      require('./components/login')
    ]
  }]
}

React.render(
  <Router routes={rootRoute} />,
  document.body
)
