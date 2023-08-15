import React, { useState } from 'react'
import classes from './style.module.css';
import Draggable from 'react-draggable';

const Floating = props => {

    const [visible, setVisible] = useState(true);

    const closebtnHandler = event => {
        event.preventDefault();
        setVisible(state => !state);
    }

    let class_drag = classes.drag;
    let contentX = 'X';
    if (!visible) {
        class_drag += ` ${classes.hiddenDrag}`;
        contentX = 'O';
    }

    return (
        <div className={classes.container} >
            <Draggable handle=".handle">
                <div className={classes.dragToolKit}>
                    <button className={classes.dragCloseBtn + ' handle'} onClick={closebtnHandler}>{contentX}</button>
                    <div className={class_drag}>
                        <div className={classes.moveIt + ' handle'}>DRAG</div>
                        <div className={classes.child}>{props.children}</div>
                    </div>
                </div>
            </Draggable >
        </div >
    );
}

export default Floating;