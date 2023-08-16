import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.css'
import SlidingBtn from '../../components/SlidingBtn/SlidingBtn'

const Notice = () => {
    return (
        <section className={classes.section}>
            <main className={classes.main}>
                <h1 className={classes.h1}>
                    Website Is Still In Development
                </h1>
                <h2 className={classes.h2}>Dev List</h2>
                <ul className={classes.p}>
                    <li></li>
                </ul>

                <div className={classes.containerx}>
                    <Link to='/home' className={classes.link}>
                        <SlidingBtn text='Home Page' />
                    </Link>
                </div>
            </main>
        </section >
    )
}

export default Notice;