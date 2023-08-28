import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

interface Props {
  name: string;
  index: number;
  resizeMUI: number;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Subject = ({ name, index, resizeMUI }: Props) => {
  return (
    <Grid
      key={name + index}
      item
      xs={12}
      sm={resizeMUI}
      md={resizeMUI}
      lg={resizeMUI}
      xl={resizeMUI}
    >
      <Item key={name}>{name}</Item>
    </Grid>
  );
};
