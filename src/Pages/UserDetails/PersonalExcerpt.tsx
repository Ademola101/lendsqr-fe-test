import React from 'react';
import styles from '../../styles/Personal.module.css';

interface PersonalInfoExcerptProps {
  name: string;
  value: string;
}
const PersonalExcerpt = ({ name, value }:PersonalInfoExcerptProps)  => {
  return (
    <div className= {styles.excerptcontainer}>

      <div className= {styles.name}>
        {name}
      </div>
      <div className= {styles.value}>
        {value}
      </div>
    </div>
  );
};

export default PersonalExcerpt;