/* eslint-disable react/display-name */
import React from 'react'

export default function({name, displayname, handleSubmit, error}) {
  return (
    <div className="container" id="form-page">
      <div id="form-box">
        <div>
          <h3>Sign Up</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          name={name}
          error={error}
          displayname={displayname}
        >
          <div>
            {/* <label htmlFor="firstName">
              <small>First Name</small>
            </label> */}
            <input
              className="input-box"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            {/* <label htmlFor="lastName">
              <small>Last Name</small>
            </label> */}
            <input
              className="input-box"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            {/* <label htmlFor="email">
              <small>Email</small>
            </label> */}
            <input
              className="input-box"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            {/* <label htmlFor="password">
              <small>Password</small>
            </label> */}
            <input
              className="input-box"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              {displayname}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <a href="/auth/google">{displayname} with Google</a>
      </div>
    </div>
  )
}
