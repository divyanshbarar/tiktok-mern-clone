import React from 'react'
import "./Videofooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"
import record from "./record.png"

function VideoFooter(props) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{props.name}</h3>
                <p>
                    {props.description}
                </p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {
                            ({ index }) => (
                                <>
                                    <p>{props.song}</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>

            </div>
            <img src={record} alt="" className="videoFooter__record" />
        </div>
    )
}

export default VideoFooter
