import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn)

  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'logIn'})
  }
  const unsubmit = (e) => {
    e.preventDefault();
    dispatchFunc({ type: 'logOut' })
  }

  return (
    <>
      {isLoggedIn ? 
        <form onSubmit={unsubmit}><button type="submit">Log Out</button></form>
        : (
        <form onSubmit={submit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
          <button type="submit">Log in</button>
        </form>
      )}
    </>
  )
}

export default LogIn