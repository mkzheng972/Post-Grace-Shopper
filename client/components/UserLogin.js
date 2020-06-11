/* eslint-disable react/display-name */
import React from 'react'

export default function({name, displayname, handleSubmit, error}) {
  return (
    <div className="container" id="form-page">
      <div id="form-box">
        <div>
          <h3>Welcome back!</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          name={name}
          error={error}
          displayname={displayname}
        >
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
