export interface ButtonCalculatorModel {
  symbol: string
  action?: () => void
  type: "button" | "submit"
  selected?: boolean
}