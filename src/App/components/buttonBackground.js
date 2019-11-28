import React, { useState } from 'react';
import setBackgroundImg from './loadBackground';

const ButtonBackground = () => {
    const [backgroundImg, setBackgroung] = useState('https://wallpapertag.com/wallpaper/full/c/0/1/220101-full-size-background-art-2560x1600-download.jpg');
    const [loadBackground, setLoadbackground] = useState('');
    return (
        <div>
            <input type="text" placeholder="URL" onChange={e => setBackgroung(e.target.value) }/>
            
            <input type="submit" onClick={setBackgroundImg(backgroundImg)}/>
        </div>
    );
};

export default ButtonBackground;
