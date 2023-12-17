import React, { useState } from 'react'
import './Login.css';
import '../components/Navbar/navbar.css'
import { useLogin } from '../hooks/useLogin';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login,error,isLoading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email,password)
    await login(email,password)
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary buttonLook" disabled={isLoading}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          Don't have an account? <a href="./signup">Sign Up</a>
          </p>
          {error && <div className='text-danger'>{error}</div>}
        </div>
      </form>
    </div>
  )
}

export default Login