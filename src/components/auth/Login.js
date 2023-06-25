// React
import React, {useState} from 'react'

// Common
import NavbarAuth from '../../common/Navbar'

// Functions/methods
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase';
import Spinner from '../../common/Spinner';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCred);
      navigate('/');
      alert('Login Successful!');
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
    setButtonDisabled(false);
  }

  return (
    <div className="bg-dark">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <img
          className="mx-auto d-block mb-5"
          src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
          width="100"
          height="80"
          alt=""
        />
        <div className="card p-5 mx-5">
          <h1 className='mb-3'>Login to your account</h1>

          <form onSubmit={onFormSubmit}>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>


            <div className="d-grid gap-2">
              <button type="submit" disabled={buttonDisabled} className="btn btn-dark mt-3">
              {loading ? <Spinner extraClass="change-size" /> : 'Login'}
              </button>
            </div>
          </form>

          <p className="mt-3 text-center">
            Don't have an account? Create one <Link to="/register">here!</Link>
          </p>

          <p className='text-center'>
            <Link to="/login/reset-password">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
