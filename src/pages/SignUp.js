import React, { useState } from 'react'
import '../components/Navbar/navbar.css'
import { useSignup } from '../hooks/useSignup';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const {signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email,username,password)

    await signup(email,username, password)
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Rejestracja</h3>
          <div className="form-group mt-3">
            <label>adres mailowy</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Wprowadź e-maila"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>nazwa użytkownika</label>
            <input
              className="form-control mt-1"
              placeholder="Wprowadź nazwę użytkownika"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group mt-3">
            <label>Hasło</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Wprowadź hasło"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <p className="forgot-password text-right mt-2">
          Masz już konto? <a href="./login">Zaloguj się</a>
          </p>
            <button type="submit" className="btn btn-primary mt-2 buttonLook" disabled={isLoading}>
              Zarejestrój się
            </button>
            {error && <div className='text-danger'>{error}</div>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp