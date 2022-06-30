import React from 'react'
import classes from './styles.module.css'

// data = [front, back,  right, left, top, bottom]
const Cube = props => {
    const { images } = props;
    return (
        <div className={classes.scene}>
            <div className={classes.cube}>

                <div className={`${classes.face} ${classes.front}`}>{images[0]}</div>
                <div className={`${classes.face} ${classes.back}`}>{images[1]}</div>
                <div className={`${classes.face} ${classes.right}`}>{images[2]}</div>
                <div className={`${classes.face} ${classes.left}`}>{images[3]}</div>
                <div className={`${classes.face} ${classes.top}`}>{images[4]}</div>
                <div className={`${classes.face} ${classes.bottom}`}>{images[5]}</div>

                {/* 
                <div className={`${classes.innerface} ${classes.innerfront}`}></div>
                <div className={`${classes.innerface} ${classes.innerback}`}></div>
                <div className={`${classes.innerface} ${classes.innerright}`}></div>
                <div className={`${classes.innerface} ${classes.innerleft}`}></div>
                <div className={`${classes.innerface} ${classes.innertop}`}></div>
                <div className={`${classes.innerface} ${classes.innerbottom}`}></div> */}

            </ div>
        </div>
    )
}

export default Cube;