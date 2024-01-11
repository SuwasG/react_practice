import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>

      <div className="container my-3">
        <div className="col-md-6 offset-md-3">
          <form>

            <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

            <div className="form-floating mb-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I accept the terms and conditions
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy;2023</p>
            <span>Already have an account? <Link to='/signin' >Sign In</Link></span>
          </form>
        </div>
      </div>

    </>
  )
}

export default Signup