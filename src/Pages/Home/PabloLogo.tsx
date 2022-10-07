import React from 'react';
import Logo from '../../Components/Logo';
import styles from '../../styles/PabloLogo.module.css';


const PabloLogo = () => {
  return (
    <aside className= {styles.container}>
      <div className= {styles.Logo}>
        <Logo/>
      </div>


      <img className= {styles.img} src="/images/pablo-sign-in.png" alt="pablo sign in" />
    </aside>
  );
};

export default PabloLogo;