import { Card } from "@mui/material";

interface Props {
  text: string;
}

export const CardHola = ({ text }: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: "red",
        borderRadius: "10px",
        padding: "8px",
        margin: "8px",
        width: "max-content",
      }}
    >
      <span className="font-extrabold text-lg text-white">{text}</span>
    </Card>
  );
};
