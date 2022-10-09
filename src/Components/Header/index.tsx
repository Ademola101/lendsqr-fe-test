import React from 'react';
import Logo from '../Logo';
import Search from '../Header/Search';
import styles from '../../styles/Header.module.css';

const index = () => {
  return (
    <header className= {styles.headercontainer}>


      <Logo /> <Search />
    </header>
  );
};

export default index;