"use client"

import { useState } from "react"
import Reponse from "./Reponse"

export default function Question({ question, prochaineQuestion }) {

    const [cssClass, setCssClass] = useState("")
    const [bonneReponse, setBonneReponse] = useState(false)


    // c'est une fonction qui est appelée par une réponse lors d'un clic, le paramètre correct est renvoyé par la réponse
    // afin de dire a son parent qu'elle est la bonne réponse. Cette fonction est utile pour savoir si la bonne réponse
    // a été cliqué afin de pouvoir passer à la prochaine question ^u^
    function choisirReponse(correct) {

        if (correct === true) {
            setBonneReponse(true)

            setTimeout(() => { // sert à changer le className pour l'animation de fermeture
                setCssClass("ferme")
            }, 1000)

            setTimeout(() => { // sert à afficher la prochaine question
                prochaineQuestion()
            }, 1500)
        }
    }

    return <div className={"question " + cssClass}>
        <h2>{question.enonce}</h2>

        <div className="reponse">
            {question.reponses_images.map((image, index) =>
                <Reponse key={question.enonce + image} bonneReponse={bonneReponse} lettre={question.reponses_texte[index]} image={image} correct={question.bonne_reponse === index} choisirReponse={choisirReponse}></Reponse>
            )}
        </div>
    </div>
}