import React, { forwardRef } from 'react';
import styles from '../../styles/InputLabel.module.css';


interface  Props {
  placeholder: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;

}
const InputLabel = forwardRef(({  placeholder, type, props }: Props, ref) => {
  return (
    <label >
      <input ref={ref} type= {type} placeholder = {placeholder}   className = {styles.input} {...props} />

    </label>
  );
});

InputLabel.displayName = 'InputLabel';
export default InputLabel;