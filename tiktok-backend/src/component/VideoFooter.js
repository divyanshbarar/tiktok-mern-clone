import React from 'react'
import "./Videofooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@divyanshbarar</h3>
                <p>
                    this is f-ing description
                </p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {
                            ({ index }) => (
                                <>
                                    <p>I am a song</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>

            </div>
            <img src="https://assets.stickpng.com/thumbs/5856b3da4f6ae202fedf2794.png" alt="" className="videoFooter__record" />
        </div>
    )
}

export default VideoFooter
