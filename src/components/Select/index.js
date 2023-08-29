import React, { useState } from 'react';
import './index.less';

function Select(props) {
    const { defaultValue, options, onChange } = props
    const [value, setValue] = useState(() => {
        let val = ''
        options.forEach(option => {
            if (option.value == defaultValue) {
                val = option.text
            }
        });
        return val
    });
    const handleChange = (e) => {
        options.forEach(option => {
            if (option.value == e.target.value) {
                setValue(option.text)
            }
        });
        onChange && onChange(e.target.value)
    }
    return (
        <div className='qr-select-div'>
            <label className='qr-select-label'>{value}</label>
            <select className="qr-select" defaultValue={defaultValue} onChange={e => handleChange(e)}>
                {options?.map((option) => (
                    <option value={option.value} key={option.key}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select
