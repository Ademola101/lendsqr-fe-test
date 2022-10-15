import React from 'react';
import styles from '../../styles/Filter.module.css';

const ResetAndFilter = () => {
  return (
    <div className= {styles.resetfiltercontainer}>

      <button className= {styles.resetbutton} type='reset'>Reset</button> <button className= {styles.filterbutton} type='submit'> Filter</button>
    </div>
  );
};

export default ResetAndFilter;