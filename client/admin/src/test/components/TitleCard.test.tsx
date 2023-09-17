import { render, screen } from "@testing-library/react";
import TitleCard from "../../components/TitleCard";

test("Renderiza TitleCard correctamente", () => {
  // Cambia "MiComponente" a "TitleCard"
  render(<TitleCard title="Titulo de prueba" />);
  const elemento = screen.getByText(/Titulo de prueba/i);
  expect(elemento).true;
});
