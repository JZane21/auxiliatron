import { ButtonCalculatorModel } from "../models/buttonModel"

interface Props{
  buttonCal:ButtonCalculatorModel
  selectedState: boolean
}

export const ButtonOperator = ({buttonCal,selectedState}:Props) => {
  const {symbol, action, type } = buttonCal;

  return (
    <button id={symbol} type={type} onClick={action} className={`w-12 p-1 m-1
    rounded-lg shadow-md  font-semibold text-base text-center
    ${selectedState ? " bg-sky-400" :
    "bg-slate-400 hover:bg-slate-300 active:bg-slate-500"}`}>
      {symbol}
    </button>
  )
}
