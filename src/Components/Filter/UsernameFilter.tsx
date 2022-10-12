import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setUsername } from '../../reducers/Filter/username';
import styles from '../../styles/Filter.module.css';
const UsernameFilter = () => {
  const dispatch:AppDispatch = useDispatch();
  return (
    <div>

      <p> Username</p>
      <input className= {styles.usernameinput}
        type="text"
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
    </div>
  );
};

export default UsernameFilter;