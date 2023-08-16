import React from 'react'
import classes from './ClippedButton.module.css'
import { Link } from 'react-router-dom'

const ClippedButton = ({ onClick, to, color, className, children }) => {
    const handler = onClick ? onClick : () => { };
    return (
        <Link onClick={handler} to={to} className={[classes.btn, classes[color], className].join(" ")}>
            <span>{children}</span>
        </Link >
    )
}

export default ClippedButton;