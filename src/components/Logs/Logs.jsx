import React, { useState } from 'react';
import LogItem from './LogItem/LogItem';
import classes from './Logs.module.css';
import Card from '../UI/Card/Card';
import LogFilter from './LogFilter/LogFilter';

const Logs = (props) => {
    const [year, setYear] = useState(2022);
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);

    const changeYearHandler = (year) => {
        setYear(year);
    }

    const logItemData = filterData.map((item) => <LogItem onDelLog={() => { props.onDelLog(item.id) }} key={item.id} date={item.date} desc={item.desc} time={item.time}></LogItem>)

    return (
        <Card className={classes.logs}>
            <LogFilter year={year} onYearChange={changeYearHandler}></LogFilter>
            {
                logItemData.length !== 0 ? logItemData : <p style={{ textAlign: 'center', color:'#fff'}}>沒有找到日誌</p>
            }
        </Card>

    );
};

export default Logs;