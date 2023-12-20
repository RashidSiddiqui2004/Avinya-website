
import React from 'react'
import './team_page_loader.css'  
import vid from "../../assets/videos/our_team_page.mp4"

function team_page_loader() {
    return (
        <div className="rings">
            <video width="100%" height="100%" autoPlay muted>
                <source src={vid} type="video/mp4" style={{ width: "1500px" }} />
            </video>
        </div>
    )
}

export default team_page_loader;

