import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import Input from '../Input'
import Select from '../Select'
import Upload from '../Upload'
import ColorPicker from '../Colorpicker';
import alipay from '../../assets/svg/ali-pay.svg'
import vxSmall from '../../assets/svg/vx-small.svg'
import vx from '../../assets/svg/vx.svg'
import vxPay from '../../assets/svg/vx-pay.svg'
import img from '../../assets/img/img.js';
import './index.less';

function ParameterList(props) {
    const { onChange } = props
    const { t } = useTranslation();
    const [level, setLevel] = useState('H');
    const [icon, setIcon] = useState('none');
    const [iconScale, setIconScale] = useState(22);
    const [iconType, setIconType] = useState('0');
    const [image, setImage] = useState(img);
    const [type, setType] = useState('rect');
    const [size, setSize] = useState(100);
    const [opacity, setOpacity] = useState(100);
    const [darkColor, setDarkColor] = useState('#000000');
    const [lightColor, setLightColor] = useState('#ffffff');
    const [posType, setPosType] = useState('rect');
    const [posColor, setPosColor] = useState('#000000')
    const levelOption = [
        { value: 'L', text: '7%', key: 'level0' },
        { value: 'M', text: '15%', key: 'level1' },
        { value: 'Q', text: '25%', key: 'level2' },
        { value: 'H', text: '30%', key: 'level3' }
    ]
    const iconTypeOption = [
        { value: '0', text: t('none'), key: 'icon0' },
        { value: '1', text: t('custom'), key: 'icon1' },
        { value: '2', text: t('weixins'), key: 'icon2' },
        { value: '3', text: t('weixin'), key: 'icon3' },
        { value: '4', text: t('weixinPay'), key: 'icon4' },
        { value: '5', text: t('ali'), key: 'icon5' },
    ]
    const typeOption = [
        { value: 'rect', text: t('rectangle'), key: 'type0' },
        { value: 'round', text: t('round'), key: 'type1' },
    ]
    const posTypeOption = [
        { value: 'rect', text: t('rectangle'), key: 'posType0' },
        { value: 'round', text: t('round'), key: 'posType1' },
        { value: 'planet', text: t('star'), key: 'posType2' },
    ]
    const parameterList = [
        { label: t('errorRate'), value: <Select defaultValue={level} options={levelOption} onChange={setLevel} />, key: 'parameter1' },
        { label: t('icon'), value: <Select defaultValue={iconType} options={iconTypeOption} onChange={setIconType} />, key: 'parameter2' },
        { label: t('iconSource'), value: <Upload setImage={setIcon} id='iconId' />, key: 'parameter3' },
        { label: t('iconZoom'), value: <Input value={iconScale} type='number' setValue={setIconScale} />, key: 'parameter4' },
        { label: t('backgroundImg'), value: <Upload setImage={setImage} id='imageId' />, key: 'parameter5' },
        { label: t('infoStyle'), value: <Select defaultValue={type} options={typeOption} onChange={setType} />, key: 'parameter6' },
        { label: t('infoZoom'), value: <Input value={size} type='number' setValue={setSize} />, key: 'parameter7' },
        { label: t('infoOpactiy'), value: <Input value={opacity} type='number' setValue={setOpacity} />, key: 'parameter8' },
        { label: t('infoDark'), value: <ColorPicker color={darkColor} onChange={setDarkColor} />, key: 'parameter9' },
        { label: t('infoLight'), value: <ColorPicker color={lightColor} onChange={setLightColor} />, key: 'parameter10' },
        { label: t('tackStyle'), value: <Select defaultValue={posType} options={posTypeOption} onChange={setPosType} />, key: 'parameter11' },
        { label: t('tackColor'), value: <ColorPicker color={posColor} onChange={setPosColor} />, key: 'parameter12' },
    ]
    const currentIcon = useMemo(() => {
        const iconList = ['', icon, vxSmall, vx, vxPay, alipay]
        return iconList[iconType]
    }, [icon, iconType])
    const scale = useMemo(() => {
        if (iconScale > 33 || iconScale < 0) {
            return 0.33
        }
        if (iconScale > 0 && iconScale < 1) {
            return 0.01
        }
        if (iconScale >= 1 && iconScale < 10) {
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
                if ((item.label === t('iconSource') && iconType != 1) || (item.label === t('iconZoom') && iconType == 0)) {
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
