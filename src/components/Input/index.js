import React from 'react';
import './index.less';

function Input(props) {
    const { placeholder, value, type = 'text', setValue } = props;
    const handleBlur = (e) => {
        setValue && setValue(e.target.value)
    }
    const handleKeyUp = (e) => {
        if (e.keyCode !== 13) {
            return
        }
        setValue && setValue(e.target.value)
    }
    return (
        <div className="qr-input-outer">
            <input type={type} name="text" className="qr-input" onChange={(e) => { setValue(e.target.value) }}
                placeholder={placeholder} value={value} onKeyUp={handleKeyUp} onBlur={handleBlur} />
        </div>
    );
}

export default Input
