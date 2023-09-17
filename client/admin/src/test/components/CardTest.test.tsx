import { render, screen } from "@testing-library/react";
import { CardHola } from "../../components/CardHola";

// primer unitTest
test("Verificar el renderizado del componente CardTest", () => {
  render(<CardHola text="hola mundo" />);
  const text = screen.getByText(/hola mundo/i);
  expect(text).true;
});
