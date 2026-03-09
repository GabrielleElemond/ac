
import Module from "./_components/Module.jsx";
import Intro from "./_components/Intro.jsx";

export default function Home() {
  return (
    <>
      <header><h1>Aide Cuisto</h1></header>
      <div className="espace"></div>
      <Module numero={1}></Module>
      <Module numero={2}></Module>
      <Module numero={3}></Module>
      <Intro></Intro>
    </>
  );
}




