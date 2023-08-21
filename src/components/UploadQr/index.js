import React from 'react';
import { decodeData } from '../../utils/qrcodeHandler';
import './index.less';

function UploadQr(props) {
    const { onChange, style } = props
    const handlePickImg = async () => {
        try {
            const files = await window.showOpenFilePicker({
                types: [{
                    accept: {
                        'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp']
                    }
                }],
                multiple: false
            });
            decodeData(await files[0].getFile()).then((res) => {
                if (res) {
                    onChange && onChange(res.data)
                }
            }).catch(console.err);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="qr-upload-qr" onClick={handlePickImg} style={style}>↑</div>
    );
}

export default UploadQr
