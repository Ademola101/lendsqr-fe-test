import React from 'react';
import Logo from '../Logo';
import Search from '../Header/Search';
import styles from '../../styles/Header.module.css';
import Docs from './Docs';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <header className= {styles.headercontainer}>

      <Link to= "/">
        <div className= {styles.logo}>
          <Logo/>
        </div>
      </Link>
      <Search />
      <Docs />
    </header>
  );
};

export default index;