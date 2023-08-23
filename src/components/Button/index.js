import React from 'react';
import './index.less';

function Button(props) {
    const { text, onClick, btnRef, style } = props
    return (<button className='qr-button' onClick={onClick} ref={btnRef} style={style}>
        {text}
    </button>)
}

export default Button
