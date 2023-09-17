export const volverDecimal = (accum: string): string => {
  if (!accum.includes(".")) {
    return accum + ".";
  } else {
    const charAEliminar = ".";
    const nuevaCadena = accum.split(charAEliminar).join("");
    return nuevaCadena;
  }
};

export const borrarElemento = (accum: string): string => {
  if (accum.length === 0) {
    return "";
  }
  if (accum.length === 2 && accum.includes("-")) {
    return "";
  }
  const auxText: string = accum;
  const AUX_VAR: string = auxText.slice(0, -1);
  return AUX_VAR;
};

export const cambiarSigno = (accum: string): string => {
  if (accum.length === 0) {
    return "";
  }
  let auxText: string = accum;
  const AUX_VAR = auxText.split("-");
  auxText = AUX_VAR[1];
  return auxText;
};