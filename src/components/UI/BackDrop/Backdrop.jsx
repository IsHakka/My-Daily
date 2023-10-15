import React from 'react';
import classes from './Backdrop.module.css'
import ReactDOM from 'react-dom';

// 獲取backdrop根元素
const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return (
        ReactDOM.createPortal(<div className={classes.backDrop}>
            {props.children}
        </div>, backdropRoot)
    );
};

export default Backdrop;