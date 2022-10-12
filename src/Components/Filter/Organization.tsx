import React, { useState } from 'react';
import { UserType } from '../../../types';
import Select from 'react-select';


interface Props {
  users: UserType[];

}

type selectOptionType = {
  value: string;
  label: string;
}
const Organization = ({ users }:Props) => {
  const [selectedOption, setSelectedOption] = useState<selectOptionType | null>(null);
  const options = users?.map(({ orgName }) => {
    return { value: orgName, label: orgName };
  }
  );

  const handleChange = (selectedOption: selectOptionType | null) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <div>
      Organization
      </div>
      <Select
        value={selectedOption}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default Organization;


