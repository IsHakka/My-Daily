import React from 'react';
import classes from './LogFilter.module.css';

const LogFilter = (props) => {

    const changeHandler = (e) => {
        props.onYearChange(+e.target.value);
    }

    return (
        <div>
            <span className={classes.Year}>年份:</span> <select className={classes.Select} value={props.year} onChange={changeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    );
};

export default LogFilter;