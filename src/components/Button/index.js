import React from 'react';
import './index.less';

function Button(props) {
    const { text, onClick, btnRef } = props
    return <button className='qr-button' onClick={onClick} ref={btnRef}>{text}</button>
}

export default Button
