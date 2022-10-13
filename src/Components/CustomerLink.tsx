import React from 'react';
import styles from '../styles/Sidebar.module.css';


type Link= {
  name: string;
  icon?: JSX.Element;

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
  { name:'Organization',
    icon: <i className="fas fa-building"></i>



  },
  { name:'Loan Requests' },
  { name:'Savings Products' },
  { name: 'Fees and Charges' },
  { name: 'Transactions' },
  { name: 'Services' },
  { name: 'ServiceAccount' },
  { name: 'Settlement' },
  { name: 'Reports' },
];

const settings:Link[] = [
  { name: 'Preferences' },
  { name: 'Fees and Pricing' },
  { name: 'Audit Logs' },

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
      <p> Settings</p>
      <div>
        {settings.map((link, i) => <CustomerLink link={link} key ={i}/>)}
      </div>
    </div>
  );
};

export default CustomerLinks;