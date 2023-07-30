import React from 'react';
import Nav from '../components/Nav';
import QrImage from '../components/QrImage';
import Input from '../components/Input';
import Upload from '../components/Upload';
import ParameterList from '../components/ParameterList';
import './App.less';

function App() {

  return (
    <div className="qr-app">
      <Nav />
      <div className='qr-content'>
        <div className='qr-content-left'>
          <QrImage />
          <Input />
          <Upload />
        </div>
        <div className='qr-content-right'>
          <ParameterList />
        </div>
      </div>
    </div>
  );
}

export default App
