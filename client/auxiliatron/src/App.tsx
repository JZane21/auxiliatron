import { useState } from "react";
import "./App.css";
import { Navbar } from "./app/components/Navbar";
import { Subtitle } from "./app/components/Subtitle";
import { Title } from "./app/components/Title";
import { Students } from "./app/components/Students";

function App() {
  // en el interceptor se comunica con el servicio, y debe saber cuando interceptar
  // los datos que llegan del backend para traducirlos (aplicar el adapter)
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Navbar>
        <>
          <Title description={`Hola Mundo ${counter}`} color={"blue"} />
          <Subtitle text={"BYE BYE"} colorText={"green"} />
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              borderRadius: "10px",
            }}
            onClick={() => setCounter(counter + 1)}
          >
            Boton
          </button>
        </>
      </Navbar>
      <Students />
    </>
  );
}

export default App;
