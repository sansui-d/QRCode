import React, { createContext, useState } from 'react';
import Nav from '../components/Nav';
import QrContent from '../components/QrContent';
import Input from '../components/Input';
import Download from '../components/Download';
import ParameterList from '../components/ParameterList';
import './App.less';

function App() {
  const [data, setData] = useState({})

  return (
    <div className="qr-app">
      <Nav />
      <div className='qr-content'>
        <div className='qr-content-left'>
          <QrContent data={data} />
          <Input />
          <Download />
        </div>
        <div className='qr-content-right'>
          <ParameterList onChange={setData} />
        </div>a
      </div>
    </div >
  );
}

export default App
