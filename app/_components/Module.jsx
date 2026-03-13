"use client"
import "./Module.css"

import { useEffect, useState } from "react"
import Capsule from "./Capsule.jsx"

export default function Module({ numero }) {
    const url = "/data.json"
    const [module, setModule] = useState({ capsules: [], icon: "", texte: "", titre: "" }) // Module selon le numéro reçu en prop

    useEffect(() => { // Aller chercher le contenu du JSON
        fetch(url).then(r => r.json()).then(data => {
            setModule(data.modules[numero - 1])
        })
    }, [])

    return <div className="module">
        <div className="module_titre">

            <div className="image_titre">
                <h1>{module.titre}</h1></div>
            <h3> {module.texte}</h3>
        </div>
        <div className="capsules">

            {module.capsules.map(capsule =>

                <Capsule capsule={capsule} key={capsule.titre}></Capsule>
            )}
        </div>
    </div>
}