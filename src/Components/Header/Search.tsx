import React from 'react';
import styles from '../../styles/Header.module.css';
import SearchIcon from './SearchIcon';




const Search = () => {
  return (
    <div>

      <input type="text" placeholder='search for anything'  className= {styles.searchinput}/>
      <div className= {styles.searchicon}>
        <SearchIcon/>
      </div>

    </div>
  );
};

export default Search;