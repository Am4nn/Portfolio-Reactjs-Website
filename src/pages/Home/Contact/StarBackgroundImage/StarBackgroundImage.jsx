import React from 'react'
import styles from './StarBackgroundImage.module.css'
import { contactData } from '../../../../utils/config';

const StarBackgroundImage = () => (
    <img src={contactData.imagesrc} alt={contactData.imagealt} className={styles.contactImage} />
)

export default StarBackgroundImage;