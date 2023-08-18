/*
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-08-18 10:27:38
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-08-18 16:46:44
 * @FilePath: /QRCode/src/components/UploadQr/index.js
 * @Description: 
 */
import React from 'react';
import { decodeData } from '../../utils/qrcodeHandler';
import './index.less';

function UploadQr(props) {
    const { onChange } = props
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
        <div className="qr-out-qr">
            <button onClick={handlePickImg}></button>
        </div>
    );
}

export default UploadQr
