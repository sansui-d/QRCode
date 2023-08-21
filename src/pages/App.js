import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';
import QrContent from '../components/QrContent';
import Input from '../components/Input';
import Download from '../components/Download';
import ParameterList from '../components/ParameterList';
import UploadQr from '../components/UploadQr';
import './App.less';

function App() {
  const [parameterData, setParameterData] = useState({})
  const [value, setValue] = useState('')

  return (
    <div className="qr-app">
      <Nav />
      <div className='qr-content'>
        <div className='qr-content-view'>
          <div className='qr-content-view-img'>
            <QrContent parameterData={parameterData} value={value}/>
          </div>
          <div className='qr-content-view-download'>
            <div className='qr-content-view-upload'>
              <Input value={value} setValue={setValue} placeholder={'https://baidu.com'} />
              <UploadQr onChange={setValue} style={{width: 28, height:28}} />
            </div>
            <Download value={value} />
          </div>
        </div>
        <div className='qr-content-parameter'>
          <ParameterList onChange={setParameterData} />
        </div>
      </div>
    </div >
  );
}

export default App
