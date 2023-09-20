import React, { useEffect, useState } from 'react';
import './index.less';

function Select(props) {
    const { defaultValue, options, onChange } = props
    const [labelValue, setLabelValue] = useState('');
    const handleChange = (e) => {
        options.forEach(option => {
            if (option.value == e.target.value) {
                setLabelValue(option.text)
            }
        });
        onChange && onChange(e.target.value)
    }
    useEffect(() => {
        options.forEach(option => {
            if (option.value == defaultValue) {
                setLabelValue(option.text)
            }
        });
    })
    return (
        <div className='qr-select-div'>
            <label className='qr-select-label'>{labelValue}</label>
            <select className="qr-select" defaultValue={defaultValue} onChange={e => handleChange(e)}>
                {options?.map((option) => (
                    <option value={option.value} key={option.key}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select
