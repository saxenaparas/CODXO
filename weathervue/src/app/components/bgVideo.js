import React from 'react';

const BgVideo = () => {
    return (
        <div className="bgVideoContainer" >
            <video src="/videos/2.mp4" className="bgVideo" autoPlay loop muted />
        </div>
    )
}

export default BgVideo;