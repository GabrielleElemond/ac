"use client"

import { useState } from "react"
import "./Reponse.css"

export default function Reponse({ lettre, image, correct, choisirReponse, bonneReponse }) {

    const [actif, setActif] = useState(false)
    const audioWrong = new Audio("wrong.mp3")
    audioWrong.volume = 0.08
    const audioCorrect = new Audio("correct.mp3")
    audioCorrect.volume = 0.08

    function click() {

        if (bonneReponse !== true) { // Si la bonne réponse n'a pas encore été trouvé

            if (actif === false) {  // Si c'est la première fois qu'on clique sur la réponse

                if (correct) { // si C'EST la bonne réponse... enfin.... -_-`
                    audioCorrect.play()
                }
                else {
                    audioWrong.play()
                }
                setActif(true)
                choisirReponse(correct)
            }
        }
    }

    return <div className="organisation">
        <div className="lettre"><h3>{lettre}</h3></div>
        <video src={image} onClick={click} autoPlay muted loop className="video_reponse"></video>
        {actif ? <img className="etat" src={correct ? "good.png" : "wrong.png"} /> : ""}
    </div>
}