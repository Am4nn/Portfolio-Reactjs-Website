import React from 'react'
import styles from './BackgroundImage.module.css'

const BackgroundImage = ({ className, imagesrc, imagealt }) => {
    return (
        <div className={[styles["project-image"], className].join(" ")}>
            <img src={imagesrc} alt={imagealt} className={styles["img"]} />
        </div>
    )
}

export default BackgroundImage;