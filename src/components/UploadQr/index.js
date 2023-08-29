import React, { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { decodeData } from '../../utils/qrcodeHandler';
import { isPicture } from '../../utils/helper';
import './index.less';

function UploadQr(props) {
    const { onChange, style } = props
    const ref = useRef(null)
    const isHovering = useHoverDirty(ref);
    const handleChange = async (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            if (isPicture(file)) {
                decodeData(file).then((res) => {
                    if (res) {
                        onChange && onChange(res.data)
                    }
                }).catch(console.err);
            }
        }
    }

    return (
        <div className="qr-upload-qr" style={style} ref={ref}>
            <label
                htmlFor="image_scanner"
                className="qr-upload-qr-label"
                style={{ textAlign: "center" }}
            >
                <svg className="qr-upload-qr-svg" version="1.1" id="图层_1" zoomAndPan="disable"
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 -5 30 40" preserveAspectRatio="none">
                    <g className="st0">
                        <line x1="15" y1="0" x2="15" y2="30" />
                        <line x1="25" y1="10" x2="15" y2="0" />
                        <line x1="5" y1="10" x2="15" y2="0" />
                    </g>
                </svg>
            </label>
            <input
                type="file"
                id="image_scanner"
                hidden={true}
                accept=".jpg, .jpeg, .png"
                onClick={(e) => e.target.value = null}
                onChange={(e) => handleChange(e)}
            />
            {isHovering && <div className='qr-upload-qr-tooltip'>上传二维码，识别二维码内容</div>}
        </div>
    );
}

export default UploadQr
