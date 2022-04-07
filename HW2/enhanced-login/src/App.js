import './style.css';
import { useState } from 'react';

const LoginForm = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const login = () => {
    if((username === 'admin') && (password === 'adminpassword')){
      setIsLoggedIn(true)
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  return (
    <>
      {isLoggedIn ?
        (
          <div>
            <h1>Hello, {username}!</h1>
            <button className="btn-submit" onClick={logout} > Logout </button>
          </div> 
        )
      :
        ( 
          <div>
            <div className="form-label">
              <label>Username:</label>
              <input
                className="input-style"
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                value={username}
               />
            </div>

            <div className="form-label">
              <label>Password:</label>
              <input
                className="input-style"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                value={password}
               />
            </div>

            <div className="form-label">
              <button className="btn-submit" onClick={login} > Submit </button>
            </div>
          </div>
        )
      }
    </>
  )
}

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
