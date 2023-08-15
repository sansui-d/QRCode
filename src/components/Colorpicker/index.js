import React, { useImperativeHandle, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { BlockPicker } from 'react-color';
import Button from '../Button'
import './index.less';

function ColorPicker(props) {
    const { color, onChange } = props;
    const pickerRef = useRef(null)
    const btnRef = useRef(null)
    const [showPicker, setShowPicker] = useState(false);
    useClickAway(pickerRef, (e) => {
        if (showPicker && e.target !== btnRef.current) {
            setShowPicker(false);
        }
    });
    const handleClick = () => {
        setShowPicker(!showPicker)
    }
    return <div className='qr-colorpicker'>
        <Button text={color} onClick={handleClick} btnRef={btnRef} />
        {showPicker && <div className='qr-colorpicker-picker' ref={pickerRef}>
            <BlockPicker color={color} onChangeComplete={(color) => { onChange && onChange(color.hex) }} />
        </div>}
    </div>;
};


export default ColorPicker