import React from 'react';
import styles from '../styles/Sidebar.module.css';

type Link= {
  name: string;
  link?: string;
  icon?: string;

}

interface Props {
  link: Link;
}
const customer:Link[] = [
  {
    name: 'Users',
  },

  {
    name: 'Loans',
  },
  {
    name: 'Decision Models',

  },
  {
    name: 'Savings',
  },
  {
    name: 'Loan Requests',
  },
  {
    name: 'Whitelist'
  },
  {
    name:' Karma'
  }
];
const business:Link[] = [
  { name:'Organization' },
  { name:'Loan requests' },
];

const CustomerLink = ({ link }:Props) => {
  return (
    <div className= {styles.linkcontainer}>

      <a className= {styles.link} href="#">{link.icon} {link.name}</a>
    </div>
  );
};



const CustomerLinks = () => {

  return (
    <div>
      <p> Customers</p>
      <div>
        {customer.map((link, i) => <CustomerLink link={link} key ={i}/>)}
      </div>
      <p> Business</p>
      <div>
        {business.map((link, i) => <CustomerLink link={link} key ={i}/>)}
      </div>
    </div>
  );
};

export default CustomerLinks;