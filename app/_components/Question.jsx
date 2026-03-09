"use client"

import { useState } from "react"
import Reponse from "./Reponse"

export default function Question({ question, prochaineQuestion }) {

    const [cssClass, setCssClass] = useState("")

    function choisirReponse(correct) {
        if (correct === true) {
            setTimeout(() => {
                setCssClass("ferme")
            }, 1000)

            setTimeout(() => {
                prochaineQuestion()
            }, 1500)
        }
    }

    return <div className={"question " + cssClass}>
        <h2>{question.enonce}</h2>

        <div className="reponse">
            {question.reponses_images.map((image, index) =>
                <Reponse key={question.enonce + image} lettre={question.reponses_texte[index]} image={image} correct={question.bonne_reponse === index} choisirReponse={choisirReponse}></Reponse>
            )}
        </div>
    </div>
}