import Question from "./Question.jsx";
import "./Capsule.css"
import { useState } from "react";

export default function Capsule({ capsule }) {

    const [videoOuvert, setVideoOuvert] = useState(false)
    // const [quizOuvert, setQuizOuvert] = useState(false)
    const [quizOuvert, setQuizOuvert] = useState(capsule.titre === "Outils de coupe")
    const [indexQuestionActive, setIndexQuestionActive] = useState(0)

    function toggleVideo() {
        setVideoOuvert(!videoOuvert)
    }
    function ouvrirQuiz() {
        setIndexQuestionActive(0)
        setVideoOuvert(false)
        setQuizOuvert(true)
    }
    function fermerQuiz() {
        setVideoOuvert(false)
        setQuizOuvert(false)
    }
    function prochaineQuestion() {
        if (indexQuestionActive < capsule.questions.length - 1) {
            setIndexQuestionActive(indexQuestionActive + 1)
        } else {
            setQuizOuvert(false)
        }
    }

    return (
        <>

            <div className={"capsule " + ((capsule.statut === "à venir") ? "desactive" : "actif")} onClick={toggleVideo}>
                <div className="icon" style={{ backgroundImage: `url(${capsule.icon})` }}></div>
                {/* <img src={capsule.icon} alt="" /> */}
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
