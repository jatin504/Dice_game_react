import { useState } from "react";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const togggleGameplay = () => {
    setisGameStarted((prev) => !prev);
  };

  return <>{isGameStarted ? <Gameplay /> : <Startgame toggle={togggleGameplay} />}</>;
    

}

export default App;
