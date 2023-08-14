import React, { useState } from 'react';
import { QRImage, QRCode } from 'react-qrbtf'
import svg from '../../assets/svg/svg1.svg'
import './index.less';

function QrImage(props) {
    const { dataC1, dataQr } = props
    console.log(QRCode)
    return (
        <div className="qr-img">
            <QRImage value='123' icon={svg} {...dataC1} {...dataQr} />
        </div>
    );
}

export default QrImage
