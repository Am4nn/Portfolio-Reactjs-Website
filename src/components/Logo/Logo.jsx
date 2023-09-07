import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div style={{ padding: "5px 15px" }}>
            <div className={styles.logo}>
                <img
                    src='/logo.svg'
                    alt=''
                    width={40}
                    height={40}
                    priority
                    className={styles.logo}
                />
                <div className={styles.highlight}><div /></div>
                <div className={styles.bg_white}><div /></div>
            </div>
        </div>
    );
}

export default Logo;
