import React from "react";
import './third.css'
import manmic1 from '../assets/manmic1.jpeg'
import manmic2 from '../assets/manmic2.webp'

function Third(){
    return(
        <>
            <div className="main">
                <div className="upper">
                    <div className="uppermain">The Top Artist</div>
                    <div className="uppermatt">Learn tos sing with beautiful voice with us. Not evey one hasbeautiful voices, but we will train your voice to love the way it was.Learn tos sing with beautiful voice with us. Not evey one hasbeautiful voices, but we will train your voice to love the way it was.</div>
                </div>
                <div className="lower">
                    <div className="lowercard">
                        <div className="lowerimage"><img src={manmic1} /></div>
                        <div className="lowermatter">The Rookies</div>
                    </div>
                    <div className="lowercard">
                        <div className="lowerimage"><img src={manmic2} /></div>
                        <div className="lowermatter">Violet Gears</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Third