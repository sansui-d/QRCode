import React from 'react';
import './index.less';

function Select(props) {
    const { defaultValue, options, onChange } = props
    return (
        <select className="qr-select" defaultValue={defaultValue} onChange={(value) => { onChange && onChange(value) }}>
            {options?.map((option) => (
                <option value={option.value} key={option.key}>{option.text}</option>
            ))}
        </select>
    );
}

export default Select
