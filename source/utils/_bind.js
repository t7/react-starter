/*
  This method auto-binds `class` methods,
  so that you don't always have to type:

  ```
  const foo = this.foo.bind(this)
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
