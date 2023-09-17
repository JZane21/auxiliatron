import { useEffect, useState } from "react";
import { CalculatorInput } from "./CalculatorInput";
import { ButtonsCalculator } from "./ButtonsCalculator";
import { BUTTONS_DATA, NUMBER_BUTTONS } from "../data/buttosData";
import { ButtonOperator } from "./ButtonOperator";
import { ButtonCalculatorModel } from "../models/buttonModel";
import { borrarElemento, cambiarSigno, volverDecimal } from "../helpers/actionsButtonsCalculator";
import { ModalPage } from "../modals/ModalPage";
import { ModalMessage } from "../modals/ModalMessage";

export const Calculator = () => {
  const [previusResult, setPreviusResult] = useState<string>("");
  const [symbolforOperate, setSymbolforOperate] = useState<string>("");
  const [numberToOperate, setNumberToOperate] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const [resultToShow, setResultToShow] = useState<string>("");

  const [pressedButton, setPressedButton] = useState<[string,number]>(["",0]);
  const [previusButton, setPreviusButton] = useState<[string,number]>(["",0]);
  const [buttonsData, setButtonsData] = useState<ButtonCalculatorModel[]>([]);

  const [findedError, setFindedError] = useState<boolean>(false);
  
  useEffect(() => {
    const auxArrayDataButtons = [...BUTTONS_DATA];
    auxArrayDataButtons.map((item:ButtonCalculatorModel,index:number) =>
    item.action=() => {
      setPressedButton([item.symbol,index]);
    });
    setButtonsData(auxArrayDataButtons);
  },[]);

  const calculateOperations = (auxArrayButtons:ButtonCalculatorModel[]):number => {
    let totalResult:number = previusResult.length === 0 ?
    numberToOperate : Number(previusResult);
    const AUX_NUMBER:number = Number(result);
    if(symbolforOperate === "+"){
      totalResult += AUX_NUMBER;
    }else if(symbolforOperate === "-"){
      totalResult -= AUX_NUMBER;
    }
    else if(symbolforOperate === "*"){
      totalResult *= AUX_NUMBER;
    }
    else if(symbolforOperate === "/"){
      if(AUX_NUMBER === 0){
        setFindedError(true);
        resetCalculator(auxArrayButtons);
        return 0;
      }else{
        totalResult /= AUX_NUMBER;
      }
    }
    else{
      if(AUX_NUMBER === 0){
        setFindedError(true);
        resetCalculator(auxArrayButtons);
        return 0;
      }else{
        totalResult %= AUX_NUMBER;
      }
    }
    return totalResult;
  };

  const resetCalculator = (auxArrayButtons:ButtonCalculatorModel[]) => {
    setResult("");
    setPreviusButton(["",0]);
    setPreviusResult("");
    setNumberToOperate(0);
    setSymbolforOperate("");
    auxArrayButtons.map(item => item.selected=false);
    setPressedButton(["",0]);
  };

  useEffect(() => {
    if(pressedButton[0] !== ""){
      const auxArrayButtons = [...buttonsData];
      auxArrayButtons[pressedButton[1]].selected = true;
      let error:boolean = false;
      let resetedCalculator:boolean = false;
      const EXIST_PREVIUS_OPERATION:boolean = ["+","-","*","/","%"].includes(previusButton[0]);
      if(pressedButton[0] === "C"){
        setResultToShow("");
        resetCalculator(auxArrayButtons);
      }else{
        if(result.length === 0 && NUMBER_BUTTONS.includes(pressedButton[0])){
          setResult(result + pressedButton[0]);
        }else if(result.length === 0 && !NUMBER_BUTTONS.includes(pressedButton[0])){
          auxArrayButtons[pressedButton[1]].selected = false;
          setFindedError(true);
        }else if(pressedButton[0] === "<-"){
          if(EXIST_PREVIUS_OPERATION){
            error = true;
            setFindedError(true);
          }else{
            setResult(borrarElemento(result));
          }
        }else if(pressedButton[0] === "(+/-)"){
          if(!EXIST_PREVIUS_OPERATION){
            if(result.includes("-")){
              setResult(cambiarSigno(result));
            }else{
              setResult("-"+result);
            }
          }else{
            error = true;
            setFindedError(true);
          }
        }else if(pressedButton[0] === "."){
          if(EXIST_PREVIUS_OPERATION){
            error = true;
            setFindedError(true);
          }else{
            setResult(volverDecimal(result));
          }
        }else if(NUMBER_BUTTONS.includes(pressedButton[0])){
          if(EXIST_PREVIUS_OPERATION){
            setNumberToOperate(Number(result));
            setResult(pressedButton[0]);
          }else{
            setResult(result + pressedButton[0]);
          }
        }else if(pressedButton[0] === "="){
          if(EXIST_PREVIUS_OPERATION || symbolforOperate.length===0){
            console.log(previusButton);
            if(EXIST_PREVIUS_OPERATION || result.charAt(result.length-1) === '.'){
              error = true;
              setFindedError(true);
            }else{
              console.log(result);
              setResultToShow(result);
              setPreviusResult(result);
            }
          }else{
            if(NUMBER_BUTTONS.includes(previusButton[0]) || previusButton[0] === "(+/-)"
            || (previusButton[0] === "<-" && result.length!==0)){
              const ESPECTED_RESULT = calculateOperations(auxArrayButtons);
              resetCalculator(auxArrayButtons);
              setResultToShow(String(ESPECTED_RESULT));
              resetedCalculator = true;
            }else{
              error = true;
              setFindedError(true);
            }
          }
        }else{
          if(EXIST_PREVIUS_OPERATION){
            setSymbolforOperate(pressedButton[0]);
          }
          else{
            if(!(previusButton[0]==="=")){
              if(symbolforOperate.length > 0){
                const ESPECTED_RESULT = calculateOperations(auxArrayButtons);
                setResultToShow(String(ESPECTED_RESULT));
                setPreviusResult(String(ESPECTED_RESULT));
                setSymbolforOperate(pressedButton[0]);
              }else{
                setSymbolforOperate(pressedButton[0]);
              }
            }else{
              setSymbolforOperate(pressedButton[0]);
            }
          }
        }
      }
      if(!resetedCalculator){
        if(!error){
          auxArrayButtons[previusButton[1]].selected = false;
          setPreviusButton([pressedButton[0],pressedButton[1]]);
        }else{
          auxArrayButtons[pressedButton[1]].selected = false;
        }
        setButtonsData(auxArrayButtons);
      }
    }
  },[pressedButton]);

  return (
    <>
    {
      findedError && (
        <ModalPage>
          <ModalMessage action={() => setFindedError(false)} title={"Error"}
          message={"El dato numerico no esta completo o no conluyó con la operación aritmética"}/>
        </ModalPage>
      )
    }
      <section
        className="rounded-lg shadow-md p-5 m-2 flex flex-col w-[320px] h-max
        justify-center items-center bg-gray-50 dark:bg-gray-900 border-[0.5px]
        border-sky-500"
      >
        <h1 className="text-xl font-bold font-mono text-white">CALCULATOR</h1>

        <CalculatorInput id={"result"} value={result} />
        <CalculatorInput id={"resultToShow"} value={resultToShow} />

        <ButtonsCalculator>
        <>
          {
            buttonsData.map((item:ButtonCalculatorModel) => (
              <ButtonOperator key={item.symbol} buttonCal={item} selectedState={item.selected || false}/>
            ))
          }
        </>
        </ButtonsCalculator>
      </section>
    </>
  );
};
