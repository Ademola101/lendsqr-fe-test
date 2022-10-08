import React from 'react';
import styles from '../../styles/InputLabel.module.css';


interface  Props {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;

}
const InputLabel = ({ name, placeholder, value, onChange, type, }: Props) => {
  return (
    <label htmlFor={name}>
      <input type= {type} name= {name} placeholder = {placeholder} value = {value} onChange = {onChange} className = {styles.input} />

    </label>
  );
};

export default InputLabel;