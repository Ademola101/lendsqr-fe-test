import React from 'react';
import styles from '../../styles/InputLabel.module.css';


interface  Props {
  placeholder: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;

}
const InputLabel = ({  placeholder, type, props }: Props) => {
  return (
    <label >
      <input type= {type} placeholder = {placeholder}   className = {styles.input} {...props} />

    </label>
  );
};

export default InputLabel;