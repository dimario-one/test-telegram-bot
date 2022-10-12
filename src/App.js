import './App.css';
const tg=window.Telegram.WebApp;
function App() {
  useEffect(()=>{
    // Метод сообщает что приложение полностью проинициализировалось и его можно отрисовывать
    tg.ready();
  },[]);
  const onClose=()=>{
tg.close()
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
