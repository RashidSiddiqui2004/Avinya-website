
import React from 'react'
import './InitialLoader.css'  
import vid from "../../assets/videos/AvinyaIntoVideo.mp4"

function InitialLoader() {
    return (
        <div className="rings">
            <video width="100%" height="100%" autoPlay muted>
                <source src={vid} type="video/mp4" style={{ width: "1500px" }} />
            </video>
        </div>
    )
}

export default InitialLoader;

