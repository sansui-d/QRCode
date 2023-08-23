import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import QrContent from '../components/QrContent';
import Input from '../components/Input';
import Download from '../components/Download';
import ParameterList from '../components/ParameterList';
import UploadQr from '../components/UploadQr';
import './App.less';

function App() {
  const [theme, setTheme] = useState('light')
  const [parameterData, setParameterData] = useState({})
  const [value, setValue] = useState('')
  useEffect(() => {
    const date = new Date();
    if (date.getHours() >= 18) {
      setTheme('drak')
    }
  }, [])

  return (
    <div className={`qr-app ${theme}`}>
      <Nav theme={theme} onChangeTheme={setTheme} />
      <div className='qr-content'>
        <div className='qr-content-view'>
          <div className='qr-content-view-left'>
            <QrContent parameterData={parameterData} value={value} />
          </div>
          <div className='qr-content-view-right'>
            <div className='qr-content-view-title'>二维码内容：</div>
            <div className='qr-content-view-upload'>
              <Input value={value} setValue={setValue} placeholder={'https://sansui-d.github.io/QRCode/'} />
              <UploadQr onChange={setValue} style={{ width: 32, height: 32 }} />
            </div>
            <div className='qr-content-download'>
              <div className='qr-content-view-title'>二维码下载：</div>
              <Download value={value} />
            </div>
          </div>
        </div>
        <div className='qr-content-parameter'>
          <div className='qr-content-parameter-title'>二维码参数：</div>
          <ParameterList onChange={setParameterData} />
        </div>
      </div>
    </div >
  );
}

export default App
