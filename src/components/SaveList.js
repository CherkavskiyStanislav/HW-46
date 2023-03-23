import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const dispatchFunc = useDispatch();

  const handleSave = () => {
    localStorage.setItem('coffee', coffee);
    localStorage.setItem('sugar', sugar);
  };
  
  const handleClear = () => {
    dispatchFunc({ type: 'Clear' })
  };

  const handleUpload = () => {
    dispatchFunc({type: 'Upload'})
  }

  return (
    <div className='save'>
        {!isLoggedIn && <p>You must be logged in to save the list.</p>}
        {isLoggedIn && (
        <>
          <button onClick={handleSave}>SAVE</button>
          <button onClick={handleClear}>CLEAR</button>
          <button onClick={handleUpload} >UPLOAD</button>
        </>
        )}
      </div>
  )
}

export default SaveList