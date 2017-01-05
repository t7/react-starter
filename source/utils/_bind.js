/*
  This method auto-binds `this` context,
  so that you don't always have to type:

  ```
  const foo = this.foo.bind(this)
  ```

  You would call this function from within a
  React class `constructor` method, like so:

  ```
  import React from 'react'
  import utils from './utils'

  class Foo extends React.Component {
    constructor (props) {
      super(props)
      utils.bind(this)
    }
  }
  ```
*/

function bind (_this) {
  // Build an array of methods.
  const methods = (
    Object.getOwnPropertyNames(
      Object.getPrototypeOf(_this)
    )
  )

  // Bind `setState`.
  _this.setState =
  _this.setState.bind(_this)

  // Loop through method names.
  methods.forEach(function (method) {
    // Ignore these.
    const ignore = {
      componentDidMount: true,
      componentDidUpdate: true,
      componentWillMount: true,
      componentWillReceiveProps: true,
      componentWillUnmount: true,
      componentWillUpdate: true,
      constructor: true,
      render: true,
      shouldComponentUpdate: true
    }

    // Bundle up conditions.
    const isValid = (
      // Skip auto-called methods.
      !ignore[method] &&

      // Ensure it's a function.
      typeof _this[method] === 'function' &&

      /*
        Some methods injected by Webpack are
        prefixed by double underscores "__".
      */
      !method.match(/^__/)
    )

    // Set `this` context.
    if (isValid) {
      _this[method] =
      _this[method].bind(_this)
    }
  })
}

// Export.
export default bind
