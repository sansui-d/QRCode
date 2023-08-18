/*
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-08-18 10:06:08
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-08-18 11:08:11
 * @FilePath: /QRCode/src/components/Input/index.js
 * @Description: 
 */
import React, { useState } from 'react';
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
        <div className="qr-input">
            <input type={type} name="text" className="input" onChange={(e) => { setValue(e.target.value) }}
                placeholder={placeholder} value={value} onKeyUp={handleKeyUp} onBlur={handleBlur} />
        </div>
    );
}

export default Input
