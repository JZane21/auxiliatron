interface Props {
  text: string;
  colorText: string;
}

export const Subtitle = ({ text, colorText }: Props) => {
  return <h2 style={{ color: colorText, fontSize: "20px" }}>{text}</h2>;
};
