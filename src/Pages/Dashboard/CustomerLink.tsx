import React from 'react';
import styles from '../../styles/Sidebar.module.css';

type Link= {
  name: string;
  link?: string;
  icon?: string;

}

interface Props {
  link: Link;
}

const CustomerLink = ({ link }:Props) => {
  return (
    <div className= {styles.linkcontainer}>

      <a className= {styles.link} href="#">{link.icon} {link.name}</a>
    </div>
  );
};



const CustomerLinks = () => {

  const links:Link[] = [
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
  return (
    <div>
      <p> Customers</p>
      {links.map((link, i) => <CustomerLink link={link} key ={i}/>)}</div>
  );
};

export default CustomerLinks;