import React from 'react';
import QRImage from '../../components/QRImage'
import './index.less';

function QrContent(props) {
    const { parameterData, value } = props

    return (
        <div className="qr-img" >
            <QRImage value={value || 'https://baidu.com'} {...parameterData} className='qr-svg' />
        </div>
    );
}

export default QrContent
