import React from 'react';
import './index.less';

function Input() {
    return (
        <div className="qr-input">
            <input type="text" name="text" className="input" placeholder="Write a message" />
        </div>
    );
}

export default Input
