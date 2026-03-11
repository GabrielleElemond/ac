"use client"

import { useState } from "react"
import "./Reponse.css"

export default function Reponse({ lettre, image, correct, choisirReponse, bonneReponse }) {

    const [actif, setActif] = useState(false)

    function click() {
        if (bonneReponse !== true) {
            if (actif === false) {
                setActif(true)
                choisirReponse(correct)
            }
        }
    }

    return <div className="organisation">
        <div className="lettre"><h3>{lettre}</h3></div>
        <video src={image} onClick={click} autoPlay muted loop className="video_reponse"></video>
        {/* <img className="reponse" src={image} alt="" onClick={click} /> */}
        {actif ? <img className="etat" src={correct ? "good.png" : "wrong.png"} /> : ""}
    </div>
}