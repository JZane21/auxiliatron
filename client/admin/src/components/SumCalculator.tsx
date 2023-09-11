import { FormEvent, useState } from "react";
import { CalculatorInput } from "./CalculatorInput";
import { validateInput } from "../helpers/validatorInputCalculator";

export const SumCalculator = () => {
  const [numberOne, setNumberOne] = useState<string>("");
  const [numberTwo, setNumberTwo] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [findedError, setFindedError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let finalText: string;
    if (!findedError && validateInput(numberOne) && validateInput(numberTwo)) {
      const resultNumber: BigInt = BigInt(numberOne) + BigInt(numberTwo);
      finalText = String(resultNumber);
    } else {
      alert("¡Datos Invalidos!");
      finalText = "";
    }
    setResult(finalText);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="rounded-lg shadow-md p-5 m-2 flex flex-col w-max h-max
      justify-center items-center bg-gray-50 dark:bg-gray-900 border-[0.5px]
      border-sky-500"
    >
      <h1 className="text-xl font-bold font-mono text-white">SUM CALCULATOR</h1>
      <CalculatorInput
        value={numberOne}
        placeHolder={"numero uno"}
        setValue={setNumberOne}
        setFindedError={setFindedError}
      />
      <CalculatorInput
        value={numberTwo}
        placeHolder={"numero dos"}
        setValue={setNumberTwo}
        setFindedError={setFindedError}
      />
      <section className="flex flex-col w-[190px] mt-2">
        <button
          type="submit"
          className="text-sky-500 hover:text-white border border-sky-500
      hover:dark:bg-gray-800 active:dark:bg-gray-950 focus:outline-none
      font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sumar
        </button>
        <p className="text-white text-lg font-mono mt-2">SUMA: {result}</p>
      </section>
    </form>
  );
};
