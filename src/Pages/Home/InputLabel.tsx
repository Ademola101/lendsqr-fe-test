import React from 'react';


interface  Props {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
}
const InputLabel = ({ name, placeholder, value, onChange, type, className }: Props) => {
  return (
    <label htmlFor={name}>
      <input type= {type} name= {name} placeholder = {placeholder} value = {value} onChange = {onChange} className = {className} />

    </label>
  );
};

export default InputLabel;