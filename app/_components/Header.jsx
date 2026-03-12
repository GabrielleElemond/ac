import PersoHeader from "./PersoHeader.jsx";

export default function Header() {
    const imagesFille = ["narratriceConfiante.png", "narratrice.png", "narratriceRire.png", "narratriceSmirk.png"]
    const imagesGars = ["adoHappy.png", "adoRire.png", "adoCurieux.png", "adoConfiant.png", "adoConfu.png"]
    return <>
        <header>
            <PersoHeader images={imagesFille}></PersoHeader>
            <h1>Aide Cuisto</h1>
            <PersoHeader images={imagesGars}></PersoHeader>
        </header>
        <div className="espace"></div>
    </>
}