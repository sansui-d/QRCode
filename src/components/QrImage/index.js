import React, { useState } from 'react';
import { QRImage, QRCode, encodeData } from 'react-qrbtf'
import svg from '../../assets/img/a.png'
import './index.less';

function QrImage(props) {
    const { dataC1, dataQr } = props
    console.log(dataC1, dataQr)
    return (
        <div className="qr-img">
            <QRImage value='123' icon={svg} iconScale={0.33} {...dataC1} {...dataQr} />
        </div>
    );
}

export default QrImage
