import "./App.css";
import useActualizaContador from "./hooks/useActualizaContador";
function App() {
  const { contador, handleResta, handleSuma } = useActualizaContador(0);

  return (
    <div className="App">
      <h1>{contador}</h1>
      <button onClick={handleSuma}> incrementa 1 al contador</button>
      <button onClick={handleResta}> resta 1 al contador</button>
    </div>
  );
}

export default App;
