import { Favorite, Message, Share } from '@material-ui/icons'
import React, { useState } from 'react'
import "./VideoSidebar.css"
function VideoSidebar(props) {
    const [liked, setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (<Favorite color="secondary"
                    onClick={() => setLiked(false)}
                    fontSize="large" />)
                    : (<Favorite fontSize="large"
                        onClick={() => setLiked(true)} />)}
                <p>{liked ? props.likes + 1 : props.likes}</p>
            </div>
            <div className="videoSidebar__button">
                <Message fontSize="large" />
                <p>{props.comment}</p>
            </div>
            <div className="videoSidebar__button">
                <Share fontSize="large" />
                <p>{props.share}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
