import React, { useState } from 'react';
import QRImage from '../../components/QRImage'
import svg from '../../assets/img/a.png'
import './index.less';

function QrContent(props) {
    const { parameterData, value } = props
    console.log(parameterData)
    return (
        <div className="qr-img">
            <QRImage value={value || 'https://baidu.com'} {...parameterData} />
        </div>
    );
}

export default QrContent
