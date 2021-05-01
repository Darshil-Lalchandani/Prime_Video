import React from 'react'

const Login = () => {
  return (
    <div className="container h-100 mt-5">
    <form className="form_container " action='/' method='GET'>
      <div className="row h-100 justify-content-center align-items-center">
      <div className="col-sm-4">
      <div className="form-group">
        <label htmlFor="InputEmail" className="text-white">Email address</label>
        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
      </div>
      </div>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
      <div className="col-sm-4">
      <div className="form-group">
        <label htmlFor="InputPassword" className="text-white">Password</label>
        <input type="password" className="form-control" id="InputPassword" />
      </div>
      <button type="submit" className="btn btn-primary btn-customised mb-5">Submit</button>
      </div>
      </div>
    </form>
    </div>
  )
}

export default Login
