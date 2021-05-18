import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from "./VideoSidebar"

function Video(props) {
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
                src={props.url}></video>

            <VideoFooter name={props.name} description={props.description}
                song={props.song} />
            <VideoSidebar likes={props.likes} comment={props.comment} share={props.share} />
        </div>
    )
}

export default Video

