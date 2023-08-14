import React, { useEffect, useRef, useState } from 'react';
import Input from '../Input'
import Select from '../Select'
import Upload from '../Upload'
import ColorPicker from '../Colorpicker';
import img from '../../assets/img/a.png';
import svg from '../../assets/svg/svg1.svg'
import './index.less';

const levelOption = [
    { value: 1, text: '7%' },
    { value: 0, text: '15%' },
    { value: 3, text: '25%' },
    { value: 2, text: '30%' }
]

const iconOption = [
    { value: 0, text: '无' },
    { value: 1, text: '自定义' },
    { value: 2, text: '微信-小' },
    { value: 3, text: '微信' },
    { value: 4, text: '微信支付' },
    { value: 5, text: '支付宝' },
]

const typeOption = [
    { value: 0, text: '矩形' },
    { value: 1, text: '圆形' },
]

const posTypeOption = [
    { value: 0, text: '矩形' },
    { value: 1, text: '圆形' },
    { value: 2, text: '星星' },
]

function ParameterList(props) {
    const { onC1Change, onQrChange } = props
    const [level, setLevel] = useState(1);
    const [icon, setIcon] = useState(svg);
    const [backgroudImage, setBackgroudImage] = useState(img);
    const [type, setType] = useState(0);
    const [size, setSize] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [otherColorDark, setOtherColorDark] = useState('#aaaaaa');
    const [otherColorLight, setOtherColorLight] = useState('#aaaaaa');
    const [posType, setPosType] = useState(0);
    const [posColor, setPosColor] = useState('#aaaaaa')
    const parameterList = [
        { label: '容错率', value: <Select defaultValue={level} options={levelOption} onChange={setLevel} />, key: 'parameter1' },
        { label: '图标', value: <Select defaultValue={icon} options={iconOption} onChange={setIcon} />, key: 'parameter2' },
        { label: '背景图片', value: <Upload />, key: 'parameter3' },
        { label: '信息点样式', value: <Select defaultValue={type} options={typeOption} onChange={setType} />, key: 'parameter4' },
        { label: '信息点缩放', value: <Input type='number' />, key: 'parameter5' },
        { label: '信息点不透明度', value: <Input type='number' />, key: 'parameter6' },
        { label: '信息点深色', value: <ColorPicker color={otherColorDark} onChange={setOtherColorDark} />, key: 'parameter7' },
        { label: '信息点浅色', value: <ColorPicker color={otherColorLight} onChange={setOtherColorLight} />, key: 'parameter8' },
        { label: '定位点样式', value: <Select defaultValue={posType} options={posTypeOption} onChange={setPosType} />, key: 'parameter9' },
        { label: '定位点颜色', value: <ColorPicker color={posColor} onChange={setPosColor} />, key: 'parameter10' },
    ]
    useEffect(() => {
        onC1Change && onC1Change(
            { backgroudImage, type, size, opacity, otherColorDark, otherColorLight, posType, posColor }
        )
    }, [backgroudImage, type, size, opacity, otherColorDark, otherColorLight, posType, posColor])
    useEffect(() => {
        onQrChange && onQrChange(
            { level }
        )
    }, [level])
    return (
        <div className="qr-parameter-list">
            {parameterList.map((item) => (
                <div className='qr-parameter-item' key={item.key}>
                    <div className='qr-parameter-label'>{item.label}</div>
                    {item.value}
                </div>
            ))}
        </div>
    );
}

export default ParameterList
