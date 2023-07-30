import React from 'react';
import { encodeData, rendererImage, } from 'beautify-qrcode';
import './index.less';

function QrImage() {
    const qrcode = encodeData({
        text: '456',
        correctLevel: 0,
    });
    return (
        <div className="qr-img" dangerouslySetInnerHTML={{ __html: rendererImage(qrcode) }}>
        </div>
    );
}

export default QrImage
