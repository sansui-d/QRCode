import React, { createContext, useState } from 'react';
import Nav from '../components/Nav';
import QrContent from '../components/QrContent';
import Input from '../components/Input';
import Download from '../components/Download';
import ParameterList from '../components/ParameterList';
import './App.less';

function App() {
  const [parameterData, setParameterData] = useState({})
  const [value, setValue] = useState('')

  return (
    <div className="qr-app">
      <Nav />
      <div className='qr-content'>
        <div className='qr-content-left'>
          <QrContent parameterData={parameterData} value={value} />
          <Input value={value} onChange={setValue} placeholder={'https://baidu.com'} />
          <Download />
        </div>
        <div className='qr-content-right'>
          <ParameterList onChange={setParameterData} />
        </div>
      </div>
    </div >
  );
}

export default App
