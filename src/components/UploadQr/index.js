import React, { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { decodeData } from '../../utils/qrcodeHandler';
import './index.less';

function UploadQr(props) {
    const { onChange, style } = props
    const ref = useRef(null)
    const isHovering = useHoverDirty(ref);
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
        <div className="qr-upload-qr" onClick={handlePickImg} style={style} ref={ref}>↑
            {isHovering && <div className='qr-upload-tooltip'>上传二维码，识别二维码内容</div>}
        </div>
    );
}

export default UploadQr
