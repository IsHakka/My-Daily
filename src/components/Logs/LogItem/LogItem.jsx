import React, { useState } from 'react';
import Mydate from './Mydate/Mydate';
import classes from './LogItem.module.css';
import Card from '../../UI/Card/Card';
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';

const LogItem = (props) => {
    const [showConfirm, SetShowConfirm] = useState(false)
    const deleteHandler = () => {
        SetShowConfirm(true)
    }
    const cancelHandler = () => {
        SetShowConfirm(false)
    }
    const okHandler = () => {
        props.onDelLog();
        SetShowConfirm(false)
    }
    return (
        <div className={classes.item}>  
            {
                showConfirm && <ConfirmModal confirmText='該操作不可恢復，請確認' onOk={okHandler} onCancel={cancelHandler}></ConfirmModal>
            } 
            <Mydate date={props.date}></Mydate>
            {/* 日誌內容 */}
            <div className={classes.content}>
                <h2 className={classes.desc}>{props.desc}</h2>
                <div className={classes.time}>{props.time}min</div>
            </div>
            {/* 刪除按鈕 */}
            <div>
                <div onClick={deleteHandler} className={classes.delete}>X</div>
            </div>
        </div>
    );
};

export default LogItem;