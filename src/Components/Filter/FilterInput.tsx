import React from 'react';
import styles from '../../styles/Filter.module.css';

interface Props {
  inputname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const FilterInput = ({ inputname, onChange, type }:Props) => {
  return (
    <div>

      <p>{inputname}</p>
      <input className= {styles.usernameinput}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterInput;