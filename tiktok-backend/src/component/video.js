import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from "./VideoSidebar"

function Video() {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const handlePress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        }
        else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video">


            <video
                onClick={handlePress}
                className="video__player"
                ref={videoRef}
                loop
                src="https://firebasestorage.googleapis.com/v0/b/insta-react-25fdf.appspot.com/o/images%2FVID-20210325-WA0026.mp4?alt=media&token=87baf185-67b7-4e3a-b21f-a9b8029f950c"></video>

            <VideoFooter />
            <VideoSidebar />
        </div>
    )
}

export default Video

