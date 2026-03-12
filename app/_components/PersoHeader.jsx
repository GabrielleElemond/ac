"use client"

import { useEffect, useState } from "react"
import "./PersoHeader.css"

export default function PersoHeader({images}) {

    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const temps_base = 10 // secondes
        const temps = temps_base + Math.random() * 1000 * 10 // secondes
        setInterval(changerImageRandom, temps)
    }, [])

    function changerImage() {
        if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }

    function changerImageRandom() {
        setImageIndex(Math.floor(Math.random() * images.length))
    }

    return <>
        <div className="perso">
            <img src={images[imageIndex]} onClick={changerImage} />
        </div>
    </>
}