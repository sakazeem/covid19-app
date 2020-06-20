import React from 'react';
import Image from '../../images/COVID-19-logo.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <img className={styles.imageLogo} src={Image} alt="COVID-19" />
    )
}

export default Header;