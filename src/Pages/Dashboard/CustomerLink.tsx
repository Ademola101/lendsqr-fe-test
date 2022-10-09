import React from 'react';

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
    <div>

      <a href="#">{link.icon} {link.name}</a>
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
    <div>{links.map((link, i) => <CustomerLink link={link} key ={i}/>)}</div>
  );
};

export default CustomerLinks;