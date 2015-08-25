import React from 'react'
import styles from './index.css'

let Login = React.createClass({

  render () {
    return (
      <div className={styles.foo}>
        <label>Username: <input type='text' /></label>
        <label>Password: <input type='password' /></label>
        <input type='submit' value='Login' />
      </div>
    )
  }
})

export default Login
