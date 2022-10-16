import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    // Метод сообщает что приложение полностью проинициализировалось и его можно отрисовывать
    console.log(tg,"tg");
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
