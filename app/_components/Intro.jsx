"use client"

import { useRef, useState } from "react"
import "./Intro.css"
import { useRouter } from "next/navigation.js"
import Link from "next/link.js"

export default function () {

    const video = useRef()
    const [boutonStyles, setBoutonStyles] = useState({})
    const router = useRouter()

    function pageSuivante() {
        router.push("liste")
    }

    function playVideo() {
        setBoutonStyles({ display: "none" }) //cache le bouton "play"
        video.current.play()
    }

    return (
        <div className="intro">
            <div className="conteneur">
                <video ref={video} controls src="https://images-ext-1.discordapp.net/external/DnsTLcmmPkt-SUQ97biPcVZm9VEf9JemQrSPq4RZqI0/https/media.tenor.com/brBep48MQN0AAAPo/dolly-sheep.mp4" onEnded={pageSuivante}></video>

                <div className="play" onClick={playVideo} style={boutonStyles}>
                    <img src="narratriceSmirk.png" />
                </div>
            </div>
            <p className="zone_bt">
                <Link className="bt" href="liste">Passer l'introduction</Link>
            </p>
        </div>
    )
}