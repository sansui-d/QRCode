import React from 'react';
import './index.less';

function Input(props) {
    const { placeholder, value, type = 'text', onChange } = props;
    return (
        <div className="qr-input">
            <input type={type} name="text" className="input"
                placeholder={placeholder} value={value} onChange={(value) => { onChange && onChange(value) }} />
        </div>
    );
}

export default Input
