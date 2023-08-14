import React, { createContext, useState } from 'react';
import Nav from '../components/Nav';
import QrImage from '../components/QrImage';
import Input from '../components/Input';
import Download from '../components/Download';
import ParameterList from '../components/ParameterList';
import './App.less';

function App() {
  const [dataC1, setDataC1] = useState({})
  const [dataQr, setDataQr] = useState({})

  return (
    <div className="qr-app">
      <Nav />
      <div className='qr-content'>
        <div className='qr-content-left'>
          <QrImage dataC1={dataC1} dataQr={dataQr} />
          <Input />
          <Download />
        </div>
        <div className='qr-content-right'>
          <ParameterList onC1Change={setDataC1} onQrChange={setDataQr} />
        </div>
      </div>
    </div >
  );
}

export default App
