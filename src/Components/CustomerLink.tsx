import React from 'react';
import styles from '../styles/Sidebar.module.css';

import UserLinkIcon from './LinksIcon/UserLinkIcon';
import LoanSackIcon from './LinksIcon/LoanSackIcon';
import DecisionIcon from './LinksIcon/DecisionIcon';
import SavingIcon from './LinksIcon/SavingIcon';
import Lrequest from './LinksIcon/Lrequest';
import WhiteListIcon from './LinksIcon/WhiteListIcon';
import KarmaIcon from './LinksIcon/KarmaIcon';
import OrganiIcon from './LinksIcon/OrganiIcon';

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
    icon: <UserLinkIcon/>
  },

  {
    name: 'Loans',
    icon: <LoanSackIcon/>
  },
  {
    name: 'Decision Models',
    icon: <DecisionIcon/>

  },
  {
    name: 'Savings',
    icon: <SavingIcon/>
  },
  {
    name: 'Loan Requests',
    icon: <Lrequest/>
  },
  {
    name: 'Whitelist',
    icon: <WhiteListIcon/>
  },
  {
    name:' Karma',
    icon: <KarmaIcon/>
  }
];

const business:Link[] = [
  { name:'Organization',
    icon: <i className="fas fa-building"></i>



  },
  { name:'Loan Requests',

  },
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