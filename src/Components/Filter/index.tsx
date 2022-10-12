import React from 'react';
import Organization from './Organization';
import { UserType } from '../../../types';

type Props = {
  users: UserType[];
}

const index = ({ users }:Props) => {
  return (
    <div>

      <Organization users={users} />
    </div>
  );
};

export default index;