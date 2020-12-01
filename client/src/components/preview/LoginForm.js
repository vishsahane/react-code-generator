
import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form name="login-form" style={{ padding: '20px',border: '1px solid #eee',
        width: '400px',margin: '0 auto' }}>
        <div style={{ 'margin-bottom':'10px' }}>
          <label for="username" style={{ 'margin-right':'10px' }}>Username</label>
          <input type="text" id="username" />
        </div>
        <div style={{ 'margin-bottom':'10px' }}>
          <label for="password" style={{ 'margin-right':'10px' }}>Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="button" style={{ 'margin-right':'10px' }}>Cancel</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm