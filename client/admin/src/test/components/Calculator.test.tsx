import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Calculator } from "../../components/Calculator";

describe("Calculator", () => {
  test("Renderizar Botones", () => {
    render(
      <Calculator/>
    );
    expect(screen.getByText(/CALCULATOR/i)).true;
    expect(screen.getByText("=")).true;
    expect(screen.getByText("+")).true;
    expect(screen.getByText("%")).true;
    expect(screen.getByText("=")).true;
    expect(screen.getByText("*")).true;
    expect(screen.getAllByText("-")).true;
    expect(screen.getAllByText("C")).true;
    expect(screen.getByText("<-")).true;
    expect(screen.getByText("0")).true;
    expect(screen.getByText("1")).true;
    expect(screen.getByText("2")).true;
    expect(screen.getByText("3")).true;
    expect(screen.getByText("4")).true;
    expect(screen.getByText("5")).true;
    expect(screen.getByText("6")).true;
    expect(screen.getByText("7")).true;
    expect(screen.getByText("8")).true;
    expect(screen.getByText("9")).true;
  });
});