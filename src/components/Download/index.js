import React from 'react';
import { saveSvg,saveImg  } from '../../utils/downloader';
import './index.less';

function Download(props) {
    const { value } = props
    const handleClick = (type) => {
        const svg = document.getElementsByClassName('qr-svg')[0]?.outerHTML;
        type === 'svg' ? saveSvg(value, svg) : saveImg(value, svg, 1500, 1500, type)
    }
    return (
        <div className="qr-download">
            <button className='qr-download-btn' onClick={()=>handleClick('svg')}>svg</button>
            <button className='qr-download-btn' onClick={()=>handleClick('png')}>png</button>
            <button className='qr-download-btn' onClick={()=>handleClick('jpg')}>jpg</button>
        </div>
    );
}

export default Download
