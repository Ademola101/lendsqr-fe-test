import React from 'react';
import Organization from './OrgFilter';
import { UserType } from '../../../types';
import styles from '../../styles/Filter.module.css';
import FilterInput from './FilterInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setUsername } from '../../reducers/Filter/username';
import { setEmail } from '../../reducers/Filter/email';
import Select from 'react-select';
import { MdOutlineCancel } from 'react-icons/md';
import { showDropDown } from '../../reducers/Filter/dropdown';


type Props = {
  users: UserType[];
}

const index = ({ users }:Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const handleDropDown= () => {
    dispatch(showDropDown());
  };

  return (
    <div className= {styles.filtercard}>
      <div className= {styles.cancelicon}>
        <MdOutlineCancel className= {styles.icon} size={20} onClick = {handleDropDown} color = '#545F7D;'/>
      </div>


      <Organization users={users} />

      <FilterInput inputname="Username" onChange={handleUserNameChange}/>
      <FilterInput inputname="Email" onChange={handleEmailChange}/>
      <FilterInput inputname="Date" onChange={handleEmailChange} type = 'date'/>
      <FilterInput inputname="Phone Number" onChange={handleEmailChange} />

      <div>
        <p>Status</p>
        <Select
          options={[
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
          ]}
        />
      </div>

    </div>
  );
};

export default index;