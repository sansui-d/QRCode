import React, { useState } from 'react';
import QRImage from '../../components/QRImage'
import svg from '../../assets/img/a.png'
import './index.less';

function QrContent(props) {
    const { data } = props
    console.log(data)
    return (
        <div className="qr-img">
            <QRImage value='123'  {...data}  />
        </div>
    );
}

export default QrContent
