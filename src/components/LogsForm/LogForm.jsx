import { useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './LogForm.module.css'

const LogForm = (props) => {

    const [formData, setFormData] = useState({
        inputDate: '',
        inputDesc: '',
        inputTime: ''
    })

    const dateChangeHandler = (e) => {
        setFormData({
            ...formData, inputDate: e.target.value
        })
    }
    const descChangeHandler = (e) => {
        setFormData({
            ...formData, inputDesc: e.target.value
        })
    }
    const timeChangeHandler = (e) => {
        setFormData({
            ...formData, inputTime: e.target.value
        })
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newLog = {
            date: new Date(formData.inputDate),
            desc: formData.inputDesc,
            time: +formData.inputTime
        }
        props.onSaveLog(newLog)
        setFormData({
            inputDate: '', inputDesc: '', inputTime: ''
        })

        console.log(newLog);
    }

    return (
        <Card className={classes.logsform}>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.inputItem}>
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} value={formData.inputDate} id="date" type="date" />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="desc">內容</label>
                    <input onChange={descChangeHandler} value={formData.inputDesc} id="desc" type="text" />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="time">時長</label>
                    <input onChange={timeChangeHandler} value={formData.inputTime} id="time" type="number" />
                </div>
                <div className={classes.formBtn}>
                    <button>add</button>
                </div>
            </form>
        </Card>
    );
};

export default LogForm;