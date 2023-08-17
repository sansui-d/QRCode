import React, { useEffect, useMemo, useRef, useState } from 'react';
import Input from '../Input'
import Select from '../Select'
import Upload from '../Upload'
import ColorPicker from '../Colorpicker';
import img from '../../assets/img/a.png';
import alipay from '../../assets/svg/ali-pay.svg'
import vxSmall from '../../assets/svg/vx-small.svg'
import vx from '../../assets/svg/vx.svg'
import vxPay from '../../assets/svg/vx-pay.svg'
import './index.less';

const levelOption = [
    { value: 'L', text: '7%', key: 'level0' },
    { value: 'M', text: '15%', key: 'level1' },
    { value: 'Q', text: '25%', key: 'level2' },
    { value: 'H', text: '30%', key: 'level3' }
]

const iconTypeOption = [
    { value: '0', text: '无', key: 'icon0' },
    { value: '1', text: '自定义', key: 'icon1' },
    { value: '2', text: '微信-小', key: 'icon2' },
    { value: '3', text: '微信', key: 'icon3' },
    { value: '4', text: '微信支付', key: 'icon4' },
    { value: '5', text: '支付宝', key: 'icon5' },
]

const typeOption = [
    { value: 'rect', text: '矩形', key: 'type0' },
    { value: 'round', text: '圆形', key: 'type1' },
]

const posTypeOption = [
    { value: 'rect', text: '矩形', key: 'posType0' },
    { value: 'round', text: '圆形', key: 'posType1' },
    { value: 'planet', text: '星星', key: 'posType2' },
]

function ParameterList(props) {
    const { onChange } = props
    const [level, setLevel] = useState('H');
    const [icon, setIcon] = useState('none');
    const [iconScale, setIconScale] = useState(22);
    const [iconType, setIconType] = useState(0);
    const [image, setImage] = useState(img);
    const [type, setType] = useState('rect');
    const [size, setSize] = useState(100);
    const [opacity, setOpacity] = useState(100);
    const [darkColor, setDarkColor] = useState('#000000');
    const [lightColor, setLightColor] = useState('#ffffff');
    const [posType, setPosType] = useState('rect');
    const [posColor, setPosColor] = useState('#000000')
    const parameterList = [
        { label: '容错率', value: <Select defaultValue={level} options={levelOption} onChange={setLevel} />, key: 'parameter1' },
        { label: '图标', value: <Select defaultValue={iconType} options={iconTypeOption} onChange={setIconType} />, key: 'parameter2' },
        { label: '图标源', value: <Upload setImage={setIcon} />, key: 'parameter3' },
        { label: '图标缩放', value: <Input value={iconScale} type='number' onChange={setIconScale} />, key: 'parameter4' },
        { label: '背景图片', value: <Upload setImage={setImage} />, key: 'parameter5' },
        { label: '信息点样式', value: <Select defaultValue={type} options={typeOption} onChange={setType} />, key: 'parameter6' },
        { label: '信息点缩放', value: <Input value={size} type='number' onChange={setSize} />, key: 'parameter7' },
        { label: '信息点不透明度', value: <Input value={opacity} type='number' onChange={setOpacity} />, key: 'parameter8' },
        { label: '信息点深色', value: <ColorPicker color={darkColor} onChange={setDarkColor} />, key: 'parameter9' },
        { label: '信息点浅色', value: <ColorPicker color={lightColor} onChange={setLightColor} />, key: 'parameter10' },
        { label: '定位点样式', value: <Select defaultValue={posType} options={posTypeOption} onChange={setPosType} />, key: 'parameter11' },
        { label: '定位点颜色', value: <ColorPicker color={posColor} onChange={setPosColor} />, key: 'parameter12' },
    ]
    const currentIcon = useMemo(() => {
        const iconList = ['', icon, vxSmall, vx, vxPay, alipay]
        return iconList[iconType]
    }, [icon, iconType])
    const scale = useMemo(() => {
        if (iconScale > 33 || iconScale < 0) {
            return 0.33
        }
        if (iconScale > 0 && iconScale < 1){
            return 0.01
        }
        if (iconScale >= 1 && iconScale < 10){
            return '0.0' + Math.round(iconScale)
        }
        return '0.' + Math.round(iconScale)
    }, [iconScale])
    useEffect(() => {
        onChange && onChange(
            { icon: currentIcon, iconScale: scale, level, image, type, size, opacity, darkColor, lightColor, posType, posColor }
        )
    }, [icon, iconType, iconScale, level, image, type, size, opacity, darkColor, lightColor, posType, posColor])
    return (
        <div className="qr-parameter-list">
            {parameterList.map((item) => {
                if ((item.label === '图标源' && iconType != 1) || (item.label === '图标缩放' && iconType == 0)) {
                    return (
                        <div className='qr-parameter-item' key={item.key} style={{ display: 'none' }}>
                            <div className='qr-parameter-label'>{item.label}</div>
                            {item.value}
                        </div>)
                }
                return (
                    <div className='qr-parameter-item' key={item.key}>
                        <div className='qr-parameter-label'>{item.label}</div>
                        {item.value}
                    </div>)
            })}
        </div>
    );
}

export default ParameterList
