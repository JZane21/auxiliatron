import { render, screen } from "@testing-library/react";
import { CalculatorInput } from "../../components/CalculatorInput";
import { useState } from "react";

test("Renderiza TitleCard correctamente", () => {
  const [value, setValue] = useState<string>("573");
  const [findedError, setFindedError] = useState<boolean>(false);

  render(
    <CalculatorInput
      value={value}
      placeHolder={""}
      setValue={setValue}
      setFindedError={setFindedError}
    />
  );
  const elemento = screen.getByText(
    /Debe agregar un número entero o decimal (3.42, -1.3, 4, -5)/i
  );
  expect(elemento).toBeFalse();
});
