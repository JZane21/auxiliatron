import { studentsData } from "../../data/students";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Subject } from "./Subject";

export const Students = () => {
  const STUDENT_LIST = studentsData;

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "10px" }}>
        <Grid container spacing={2}>
          {/* item xs={12} sm={10} md={8} lg={6} xl={4} */}
          {STUDENT_LIST.map((item, index) => {
            const positions: number[] = [0, 2, 6, 4, 8, 4];
            let condition: number = index + 1;
            while (condition > 5) {
              condition -= 5;
            }

            return (
              <Subject
                key={index + 1}
                name={item.name}
                index={index + 1}
                resizeMUI={positions[condition]}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
