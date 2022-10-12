import React from 'react';
import { UserType } from '../../../types';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setFilter } from '../../reducers/Filter';

interface Props {
  users: UserType[];

}

type selectOptionType = {
  value: string;
  label: string;
}
const Organization = ({ users }:Props) => {
  const dispatch:AppDispatch = useDispatch();
  const filterValue = useSelector((state:RootState) => state.filter);
  const options = users?.map(({ orgName }) => {
    return { value: orgName, label: orgName };
  }
  );

  const handleChange = (selectedOption: selectOptionType | null) => {
    dispatch(setFilter(selectedOption));
  };

  return (
    <div>
      <div>
      Organization
      </div>
      <Select
        value={filterValue}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default Organization;


