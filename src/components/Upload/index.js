import React from 'react';
import './index.less';

function Upload(props) {
    const { img, setImage } = props
    const handlePickImg = async () => {
        try {
            const arrFile = await window.showOpenFilePicker({
                types: [{
                    accept: {
                        'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp']
                    }
                }],
                multiple: false
            });
            const URL = window.URL || window.webkitURL;
            var imgURL = URL.createObjectURL(await arrFile[0].getFile());
            setImage(imgURL)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="qr-upload">
            <button onClick={handlePickImg}></button>
        </div>
    );
}

export default Upload
