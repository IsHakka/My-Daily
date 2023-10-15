import React from 'react';
import classes from './ConfirmModal.module.css';
import Card from '../Card/Card';
import Backdrop from '../BackDrop/Backdrop';
const ConfirmModal = (props) => {
    return (
        <Backdrop>
            <Card className={classes.confirmModal}>
                <div className={classes.confirmText}>{props.confirmText}</div>
                <div className={classes.confirmButton}>
                    <button onClick={props.onOk} className={classes.okButton}>確認</button>
                    <button onClick={props.onCancel}>取消</button>
                </div>
            </Card>
        </Backdrop>
    );
};

export default ConfirmModal;