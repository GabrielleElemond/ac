"use client"
import { useState } from "react"
import "./Quiz.css"

export default function Quiz() {
    const [reponse, setReponse] = useState(false)

    function VerifierReponse() {
        if (reponse === true) {
            setReponse(true)
        }
        else {
            setReponse(false)
        }
        console.log("Allo")
    }

    return (
        <div className="quiz">
            <h2>Question 1</h2>
            <p>Scratch my tummy actually i hate you now fight me i want to go outside let me go outside nevermind inside is better. Chew iPad power cord if it fits, i sits and whatever. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff so human is behind a closed door, emergency! abandoned! meeooowwww!!!, </p>
            <div className="choix">

                <div className="reponse" onClick={VerifierReponse}>
                    oui
                </div>
                <div className="reponse" onClick={VerifierReponse}>
                    non
                </div>
                <div className="reponse" onClick={VerifierReponse}>
                    peut-être
                </div>
                <div className="reponse" onClick={VerifierReponse}>
                    je ne sais pas
                </div>
            </div>
        </div>
    )
}