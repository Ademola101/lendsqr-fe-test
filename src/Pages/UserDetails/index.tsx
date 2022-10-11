import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../Services/API/Users';


type id = string | undefined;
const index = () => {
  const { id } = useParams<{ id: id }>();
  const { data: user } = useQuery(['user', id], () => getUser(id as string));

  return (
    <div>

      <h1>{user?.profile.firstName}</h1>
    </div>
  );
};

export default index;