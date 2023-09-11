import "./App.css";
import { SumCalculator } from "./components/SumCalculator";
import { ModalPage } from "./modals/ModalPage";
/*

Crear un componente  Calculadora de Suma que permita a los usuarios realizar sumas de dos números.
El componente debe incluir dos campos de entrada de números y un botón de "Sumar".
Al hacer clic en el botón, el componente debe mostrar el resultado de la suma en pantalla.

Requisitos del Componente:

1. El componente debe tener dos campos de entrada de números donde los usuarios puedan
ingresar los números que desean sumar.

2. Debe haber un botón de "Sumar" que, al hacer clic, realice la suma de los dos números
ingresados y muestre el resultado en pantalla.

3. El componente debe manejar adecuadamente los casos en los que los usuarios no ingresen
números válidos o no ingresen ningún número.

4. El resultado de la suma debe mostrarse en un formato claro y fácil de entender.

Requisitos de las Pruebas Unitarias:

1.Escribe pruebas unitarias para verificar que el componente funciona correctamente en
diferentes escenarios, como la suma de números positivos, números negativos, números
decimales y la gestión de entradas no válidas.

2. Asegúrate de que las pruebas cubran todos los aspectos funcionales del componente,
incluyendo la actualización de la pantalla después de hacer clic en el botón de "Sumar"
y la gestión de errores.

*/
function App() {
  return (
    <>
      <ModalPage>
        <SumCalculator />
      </ModalPage>
    </>
  );
}

export default App;
