import React from 'react';
import { UserType } from '../../../types';
import Select from 'react-select';
import styles from '../../styles/Filter.module.css';
interface Props {
  users: UserType[] | undefined;
  handleChange: (selectedOption: selectOptionType |null ) => void;
  filterValue: selectOptionType | null;

}

type selectOptionType = {
  value: string | null;
  label: string | null;
}
const Organization = ({ users, handleChange, filterValue }:Props) => {
  const options = users?.map(({ orgName }) => {
    return { value: orgName, label: orgName };
  }
  );


  return (
    <div> <p className= {styles.inputname}>
       Organization

    </p>
    <Select
      value={filterValue}
      options={options}
      onChange={handleChange}
      name='organization'
    />
    </div>
  );
};

export default Organization;


