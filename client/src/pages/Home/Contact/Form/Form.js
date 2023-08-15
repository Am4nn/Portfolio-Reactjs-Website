import React from 'react'
import styles from "./Form.module.css"

const Form = ({ className }) => {
    return (
        <div className={[className, styles.form].join(" ")}>
            Form
        </div>
    )
}

export default Form;