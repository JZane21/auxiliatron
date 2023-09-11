export const validateInput = (value:string):boolean => {
  const isNumber:RegExp = /^-?\d+(\.\d+)?$/;
  return isNumber.test(value);
};