import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.css'
import SlidingBtn from '../../components/SlidingBtn/SlidingBtn'
import Ghost from './Ghost'

const NotFound = () => {
    return (
        <section className={classes.section}>
            <main className={classes.section}>
                <h1 className={classes.h1}>
                    4
                    <span className={classes.span}>
                        <Ghost />
                    </span>
                    4
                </h1>
                <h2 className={classes.h2}>Error: 404 page not found</h2>
                <p className={classes.p}>Sorry, the page you're looking for cannot be accessed</p>

                <div className={classes.containerx}>
                    <Link to='/home' className={classes.link}>
                        <SlidingBtn text='Home Page' />
                    </Link>
                </div>
            </main>
        </section >
    )
}

export default NotFound;
