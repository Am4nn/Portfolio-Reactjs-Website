import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SlidingBtn from '../../components/SlidingBtn/SlidingBtn'

const Notice = () => {
    return (
        <section className={classes.section}>
            <main className={classes.main}>
                <h1 className={classes.h1}>
                    Website Is Still In Development
                </h1>
                <h2 className={classes.h2}>---------------TODO---------------</h2>
                <ul className={classes.p}>
                    <li>Add ABOUT section</li>
                    <li> Add my pic in vertical in about</li>
                    <li>Add footer</li>
                    <li>Have feedback form and contact me</li>
                    <li>Add Resume route</li>
                </ul>

                <div className={classes.containerx}>
                    <Link to='/home' className={classes.link}>
                        <SlidingBtn text='Home Page'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </SlidingBtn>
                    </Link>
                </div>
            </main>
        </section >
    )
}

export default Notice;