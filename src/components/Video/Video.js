import React from 'react'
import clip from '../../video/01.mp4'
import './Video.scss'

function Video() {
    return (
        <div className='video'>
            <video src={clip} className='bgvideo'
                loop muted='true' autoplay='true' controls
            />
        </div>
    )
}

export default Video
