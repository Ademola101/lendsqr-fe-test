import React from 'react';
import PersonalExcerpt from './PersonalExcerpt';
import styles from '../../styles/Personal.module.css';
import { UserType } from '../../../types';
interface PersonalInformationProps {
  user: UserType
}

const Education = ({ user }:PersonalInformationProps) => {
  const monthlyIncomeRange = `${user?.education.monthlyIncome[0]} - ${user?.education.monthlyIncome[1]}`;
  return (
    <div>
      <div className= {styles.bodycontainer}>
        <p className= {styles.information}> Education and Employement</p>


        <div className= {styles.container}>
          <PersonalExcerpt name= ' level of education ' value= {user?.education.level}/>
          <PersonalExcerpt name= ' employement status ' value= {user?.education.employmentStatus}/>
          <PersonalExcerpt name= ' sector of employment ' value= {user?.education.sector}/>
          <PersonalExcerpt name= ' bvn ' value= {user?.profile.bvn}/>
          <PersonalExcerpt name= ' duration of employement ' value= {user?.education.duration}/>
          <PersonalExcerpt name= ' office email ' value= {user?.education.officialEmail}/>
          <PersonalExcerpt name= ' Monthly income ' value= {monthlyIncomeRange}/>
          <PersonalExcerpt name= ' loan repayment ' value= {user?.education.loanRepayment}/>
        </div>

      </div>

    </div>
  );
};

export default Education;