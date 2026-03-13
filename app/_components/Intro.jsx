"use client"

import { useEffect, useRef, useState } from "react"
import "./Intro.css"
import { useRouter } from "next/navigation.js"
import Link from "next/link.js"

export default function () {

    const video = useRef()
    const [boutonStyles, setBoutonStyles] = useState({})
    const router = useRouter()

    useEffect(() => {
        video.current.volume = 0.5
    }, [])

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
                <video ref={video} className="video_intro" controls src="https://media.milanote.com/p/files/1W0QCk18CMAP0B/Gzs/intro_compressed.mp4" onEnded={pageSuivante}></video>

                <div className="play" onClick={playVideo} style={boutonStyles}>
                    <img src="play.png" />
                </div>
            </div>
            <p className="zone_bt">
                <Link className="bt" href="liste">Passer l'introduction</Link>
            </p>
        </div>
    )
}