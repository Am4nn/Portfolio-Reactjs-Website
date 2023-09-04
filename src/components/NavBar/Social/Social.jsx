import React from 'react'
import { Icon } from '../../Icons';
import styles from './Social.module.css'
import { socialMediaDetails } from "../../../utils/config"

const Social = () => (
    <div className={styles.StyledSideElement}>
        <ul className={styles.StyledSocialList}>
            {socialMediaDetails && socialMediaDetails.map(({ url, name }, i) => (
                <li key={`social-li-${i}`}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <Icon name={name} />
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


export default Social;