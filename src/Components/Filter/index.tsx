import React, { useState } from 'react';
import Organization from './OrgFilter';
import { UserType } from '../../../types';
import styles from '../../styles/Filter.module.css';
import FilterInput from './FilterInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setUsername, setEmail,setOrganization } from '../../reducers/Filter/filter';
import Select from 'react-select';
import { MdOutlineCancel } from 'react-icons/md';
import { showDropDown } from '../../reducers/Filter/dropdown';
import ResetAndFilter from './ResetAndFilter';
import { FilterValuesType, OrganizationType } from '../../../types';


type Props = {
  users: UserType[];
}


const index = ({ users }:Props) => {

  const [filterValue, setFilterValue] = useState<FilterValuesType>({
    username: '',
    email: '',
    organization: { value: '', label: '' }
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterValue({ ...filterValue, [name]: value });
  };
  const dispatch = useDispatch<AppDispatch>();

  const onSubmithandle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUsername(filterValue.username));
    dispatch(setEmail(filterValue.email));
    dispatch(setOrganization(filterValue.organization));
    dispatch(showDropDown());
  };

  const handleChangeOrganizationChange  = (selectedOption: OrganizationType | null ) => {

    setFilterValue({ ...filterValue, organization: selectedOption });
  };



  const handleDropDown= () => {
    dispatch(showDropDown());
  };

  return (
    <form onSubmit={onSubmithandle} className= {styles.filtercard}>
      <div className= {styles.cancelicon}>
        <MdOutlineCancel className= {styles.icon} size={20} onClick = {handleDropDown} color = '#545F7D;'/>
      </div>


      <Organization users={users} handleChange = {handleChangeOrganizationChange} filterValue = {filterValue.organization}/>

      <FilterInput name= 'username' inputname="Username" onChange={onChange}/>
      <FilterInput name='email' inputname="Email" onChange={onChange}/>
      <FilterInput name='date' inputname="Date" onChange={onChange} type = 'date'/>
      <FilterInput inputname="Phone Number" onChange={onChange} />

      <div>
        <p>Status</p>
        <Select
          options={[
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
          ]}
        />
      </div>
      <ResetAndFilter />

    </form>
  );
};

export default index;