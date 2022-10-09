
import axios from 'axios';
import { UserType } from '../../types';

const baseUrl = ' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/';

export const getAllUsers = async(): Promise<UserType[]> => {
  const response = await axios.get(`${baseUrl}users`);
  return response.data;
};