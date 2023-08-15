import React, {useState} from 'react';
import './index.less';

function Input(props) {
    const { placeholder, value, type = 'text', onChange } = props;
    const [inputValue, setInputValue] = useState(value);
    const handleChange = (e) => {
        onChange && onChange(e.target.value) 
    }
    const handleKeyUp = (e) => {
        console.log(e)
        if(e.keyCode !== 13){
            return
        }
        onChange && onChange(e.target.value) 
    }
    return (
        <div className="qr-input">
            <input type={type} name="text" className="input" onChange={(e)=>{setInputValue(e.target.value)}}
                placeholder={placeholder} value={inputValue} onKeyUp={handleKeyUp} onBlur={handleChange} />
        </div>
    );
}

export default Input
