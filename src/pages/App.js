import React from 'react';
import { Button } from 'antd';
import './App.less';

function App() {
  return (
    <div className="qr-app">
      <div className='qr-app-title'>背景二维码</div>
      <div className='qr-app-dec'>在线生成带背景的二维码</div>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App
