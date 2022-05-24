import { useState } from "react";

function useActualizaContador(inicial) {
  const [contador, setContador] = useState(inicial);

  const handleSuma = () => {
    setContador(contador + 1);
  };

  const handleResta = () => {
    setContador(Math.max(0, contador - 1));
  };

  return { contador, handleResta, handleSuma };
}

export default useActualizaContador;
