import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setUsername } from '../../reducers/Filter/username';
const Username = () => {
  const dispatch:AppDispatch = useDispatch();
  return (
    <div>

      <p> Username</p>
      <input
        type="text"
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
    </div>
  );
};

export default Username;