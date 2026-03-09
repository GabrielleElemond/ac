"use client"
import "./Module.css"

import { useEffect, useState } from "react"
import Capsule from "./Capsule.jsx"

export default function Module({ numero }) {
    const url = "/data.json"
    const [module, setModule] = useState({ capsules: [], icon: "", texte: "", titre: "" })

    useEffect(() => {
        fetch(url).then(r => r.json()).then(data => {
            setModule(data.modules[numero - 1])
        })
    }, [])

    return <div className="module">
        <div className="module_titre">
            {/* <h1>Module - </h1> */}
            <div className="image_titre"><div className="image" style={{ backgroundImage: `url(${module.icon})` }} ></div>
                <h1>{module.titre}</h1></div>

            <h3> {module.texte}</h3>
            {/* <img src="/shield.png" alt="" /> */}
        </div>
        <div className="capsules">

            {module.capsules.map(capsule =>

                <Capsule capsule={capsule} key={capsule.titre}></Capsule>
                // <div className="capsule" key={capsule.titre} >
                // </div>
            )}
        </div>
    </div>
}