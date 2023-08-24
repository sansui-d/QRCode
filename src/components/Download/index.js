import React from 'react';
import { saveSvg, saveImg } from '../../utils/downloader';
import Button from '../Button';
import './index.less';

function Download(props) {
    const { value } = props
    const handleClick = (type) => {
        const svg = document.getElementsByClassName('qr-svg')[0]?.outerHTML;
        type === 'svg' ? saveSvg(value || 'https://sansui-d.github.io/QRCode/dist/index.html', svg)
            : saveImg(value || 'https://sansui-d.github.io/QRCode/dist/index.html', svg, 1500, 1500, type)
    }
    return (
        <div className="qr-download">
            <Button className='qr-download-btn' onClick={() => handleClick('svg')} text='svg' style={{ width: 64 }} />
            <Button className='qr-download-btn' onClick={() => handleClick('png')} text='png' style={{ width: 64, marginLeft: 10 }} />
            <Button className='qr-download-btn' onClick={() => handleClick('jpg')} text='jpg' style={{ width: 64, marginLeft: 10 }} />
        </div>
    );
}

export default Download
