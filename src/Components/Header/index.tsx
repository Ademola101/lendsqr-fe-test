import React from 'react';
import Logo from '../Logo';
import Search from '../Header/Search';
import styles from '../../styles/Header.module.css';

const index = () => {
  return (
    <div className= {styles.container}>


      <Logo /> <Search />
    </div>
  );
};

export default index;