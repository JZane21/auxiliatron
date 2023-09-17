import { render, screen } from "@testing-library/react";
import { CalculatorInput } from "../../components/CalculatorInput";

describe("CalculatorInput",() => {
  test("Renderizar numero entero +", () => {
    const value:string = "753343";
    render(
      <CalculatorInput value={value} idInput={"11"}/>
    );
    const elemento = screen.getByText(/753343/i);
    expect(elemento).true;
  });
  
  test("Renderizar numero entero -",() => {
    const value:string = "-3583083";
    render(
      <CalculatorInput value={value} idInput={"22"}/>
    );
    const elemento = screen.getByText("-3583083");
    expect(elemento).true;
  });

  test("Renderizar numero flotante +",() => {
    const value:string = "98859.0000000000034";
    render(
      <CalculatorInput value={value} idInput={"33"}/>
    );
    const elemento = screen.getByText(`${value}`);
    expect(elemento).true;
  });

  test("Renderizar numero flotante -", () => {
    const value:string = "-49320.0000000000034";
    render(
      <CalculatorInput value={value} idInput={"44"}/>
    );
    const elemento = screen.getByText(`${value}`);
    expect(elemento).true;
  });
  
});
