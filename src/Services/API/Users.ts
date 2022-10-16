
import axios from 'axios';
import { UserType } from '../../../types';
import { setLocalStorageItem } from '../localStorage';

const baseUrl = ' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/';

export const getAllUsers = async(): Promise<UserType[]> => {
  const response = await axios.get(`${baseUrl}users`);
  const status = ['Blacklisted', 'Active', 'Inactive', 'Pending'];
  const users = response.data.map((user: UserType) => {
    const randomStatus = Math.floor(Math.random() * 4);
    return {
      ...user,
      status: status[randomStatus]
    };

  });

  return users;


};


export const getUser = async(id: string): Promise<UserType> => {
  const response = await axios.get(`${baseUrl}users/${id}`);
  const status = ['Blacklisted', 'Active', 'Inactive'];
  const randomStatus = status[Math.floor(Math.random() * status.length)];
  const data = response.data;
  data.status = randomStatus;
  setLocalStorageItem(`user-${id}`, JSON.stringify(data));

  return data;

};