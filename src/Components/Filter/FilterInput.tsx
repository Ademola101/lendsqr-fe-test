import React from 'react';
import styles from '../../styles/Filter.module.css';

interface Props {
  inputname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
}
const FilterInput = ({ inputname, onChange, type, name }:Props) => {
  return (
    <div>

      <p>{inputname}</p>
      <input className= {styles.usernameinput}
        type={type}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default FilterInput;