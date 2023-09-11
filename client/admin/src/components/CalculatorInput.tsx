import { useEffect, useState } from "react";
import { validateInput } from "../helpers/validatorInputCalculator";

interface Props {
  value: string;
  placeHolder: string;
  setValue: (param: string) => void;
  setFindedError: (param: boolean) => void;
}

export const CalculatorInput = ({
  value,
  placeHolder,
  setValue,
  setFindedError,
}: Props) => {
  const [incorrectInput, setIncorrectInput] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let stateError: boolean;
    let textError: string;
    if (value.length !== 0 && !validateInput(value)) {
      stateError = true;
      textError = "Debe agregar un número entero o decimal (3.42, -1.3, 4, -5)";
    } else {
      stateError = false;
      textError = "";
    }
    setError(textError);
    setFindedError(stateError);
    setIncorrectInput(stateError);
  }, [value]);

  return (
    <>
      {incorrectInput && (
        <label className="text-red-500 m-3 mb-0">{error}</label>
      )}
      <input
        className="bg-transparent rounded-lg p-2 m-3 outline-none shadow-md text-white
      placeholder:text-gray-400 border-[0.1px] border-sky-500"
        value={value}
        placeholder={placeHolder}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
