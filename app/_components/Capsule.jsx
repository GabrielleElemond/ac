import Question from "./Question.jsx";
import "./Capsule.css"
import { useState } from "react";

export default function Capsule({ capsule }) {

    const [videoOuvert, setVideoOuvert] = useState(false)
    const [quizOuvert, setQuizOuvert] = useState(false)
    // const [quizOuvert, setQuizOuvert] = useState(capsule.titre === "Outils de coupe") //debug
    const [indexQuestionActive, setIndexQuestionActive] = useState(0)

    function toggleVideo() { // appeler pour afficher ou cacher une capsule vidéo
        setVideoOuvert(!videoOuvert)
    }
    function ouvrirQuiz() {  // appeler pour afficher le quiz
        setIndexQuestionActive(0)
        setVideoOuvert(false)
        setQuizOuvert(true)
    }
    function fermerQuiz() { // appeler pour fermer le quiz
        setVideoOuvert(false)
        setQuizOuvert(false)
    }
    function prochaineQuestion() { //passe chaque question à l'aide de l'index et ferme le quiz à la fin
        if (indexQuestionActive < capsule.questions.length - 1) { // le -1 parce que sinon la condition dépasse les index
            setIndexQuestionActive(indexQuestionActive + 1)
        }
        else {
            setQuizOuvert(false)
        }
    }

    return (
        <>

            <div className={"capsule " + ((capsule.statut === "à venir") ? "desactive" : "actif")} onClick={toggleVideo}>
                <img src={capsule.icon} alt="" className="icon" />
                <h2>{capsule.titre}</h2>
                <p>{capsule.statut}</p>


            </div>
            {videoOuvert ? <>
                <div className="video">
                    <div className="x" style={{ backgroundImage: "url(x.png)" }} onClick={toggleVideo}></div>
                    <video src={capsule.video} autoPlay onEnded={ouvrirQuiz} controls></video>
                </div>
                <div className="bg" onClick={fermerQuiz}></div>
            </> : ""}
            {quizOuvert ?

                <>
                    <div className="questions">
                        {capsule.questions.map((question, index) =>
                            <span key={index}>
                                {(index === indexQuestionActive) ? <Question question={question} prochaineQuestion={prochaineQuestion}></Question> : ""}
                            </span>
                        )}

                    </div>
                    <div className="bg" onClick={fermerQuiz}></div>
                </>


                : ""}


        </>
    )
}
