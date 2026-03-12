"use client"

import { useEffect, useState } from "react"
import "./PersoHeader.css"

export default function PersoHeader({ images }) {

    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => { // change les images avec un délai de 10 à 20 secondes
        const temps_base = 10 // secondes
        const temps = temps_base + Math.random() * 1000 * 10 // secondes
        setInterval(changerImageRandom, temps) //image random après le délai
    }, [])

    function changerImage() {

        if (imageIndex < images.length - 1) { // fait en sorte de passer dans le tableau d'images
            setImageIndex(imageIndex + 1)
        }
        else {
            setImageIndex(0) // lorsque rendu à la fin du tableau, cela remet la première image
        }
    }

    function changerImageRandom() { // images random
        setImageIndex(Math.floor(Math.random() * images.length))
    }

    return <>
        <div className="perso">
            <img src={images[imageIndex]} onClick={changerImage} />
        </div>
    </>
}