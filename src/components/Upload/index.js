import React from 'react';
import Button from '../Button';
import './index.less';

function Upload(props) {
    const { img, setImage } = props
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
            const reader = new FileReader();
            reader.readAsDataURL(await files[0].getFile());
            reader.onload = function (e) {
                setImage(e.target.result)
            };
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="qr-upload">
            <Button onClick={handlePickImg} text='上传图片' />
        </div>
    );
}

export default Upload
