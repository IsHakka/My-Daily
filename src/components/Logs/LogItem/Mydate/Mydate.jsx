import React from 'react';
import classes from './Mydate.module.css'

const Mydate = (props) => {
    const month = props.date.toLocaleString('zh-tw',{month:'numeric'});
    const date = props.date.getDate()
    return (
        <div>
            {/* 日誌時間 */}
            <div className={classes.date}>
                <div className={classes.month}>{month}</div>
                <div className={classes.day}>{date}</div>
            </div>
        </div>
    );
}; 

export default Mydate;