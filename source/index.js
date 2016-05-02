// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// CSS.
import './sass/index.scss'

// Routes.
import routes from './routes'

// Redux root reducer.
import rootReducer from './redux'

// Redux store.
const store = createStore(rootReducer)

// Redux provicer.
const template = (
  <Provider store={store}>
    {routes}
  </Provider>
)

// Insertion point.
const el = document.getElementById('app')

// Render the app.
ReactDOM.render(template, el)
