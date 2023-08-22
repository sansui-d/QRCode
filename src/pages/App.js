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
          <div className='qr-content-view-left'>
            <QrContent parameterData={parameterData} value={value} />
          </div>
          <div className='qr-content-view-right'>
            <div className='qr-content-view-title'>二维码内容：</div>
            <div className='qr-content-view-upload'>
              <Input value={value} setValue={setValue} placeholder={'https://baidu.com'} />
              <UploadQr onChange={setValue} style={{ width: 32, height: 32 }} />
            </div>
            <div className='qr-content-download'>
              <div className='qr-content-view-title'>二维码下载：</div>
              <Download value={value} />
            </div>
          </div>
        </div>
        <div className='qr-content-parameter'>
          <div className='qr-content-parameter-title'>参数配置：</div>
          <ParameterList onChange={setParameterData} />
        </div>
      </div>
    </div >
  );
}

export default App
