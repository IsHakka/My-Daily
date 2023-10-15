import { useState } from 'react';
import './App.css';
import Logs from './components/Logs/Logs';
import LogForm from './components/LogsForm/LogForm';

function App() {

  const [logsData, setLogsData] = useState(
    [
      {
        id: '1',
        date: new Date(2021, 1, 20, 18, 30),
        desc: 'learn English',
        time: 30
      },
      {
        id: '2',
        date: new Date(2022, 1, 10, 12, 30),
        desc: 'sleep',
        time: 60
      },
      {
        id: '3',
        date: new Date(2023, 1, 15, 18, 30),
        desc: 'play baseball',
        time: 120
      },
    ])

  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + ''
    setLogsData([...logsData, newLog])
  }

  const delLogById = (id) => {
    setLogsData(prevState => {
      const newLogs = prevState.filter(item => item.id !== id)
      return newLogs;
    });
  };

  return (
    <div className='app'>
      <LogForm onSaveLog={saveLogHandler}></LogForm>
      <Logs logsData={logsData} onDelLog={delLogById}>
        {/* 日誌項目 */}
        <div className='item'>
        </div>
      </Logs>
    </div>
  );
}

export default App;    