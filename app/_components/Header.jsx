import PersoHeader from "./PersoHeader.jsx";

export default function Header() {
    const imagesNarratrice = ["narratriceConfiante.png", "narratrice.png", "narratriceRire.png", "narratriceSmirk.png"]
    const imagesAdo = ["adoHappy.png", "adoRire.png", "adoCurieux.png", "adoConfiant.png", "adoConfu.png"]
    return <>
        <header>
            <PersoHeader images={imagesNarratrice}></PersoHeader>
            <h1>Aide Cuisto</h1>
            <PersoHeader images={imagesAdo}></PersoHeader>
        </header>
        <div className="espace"></div>
    </>
}