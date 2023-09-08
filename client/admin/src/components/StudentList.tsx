import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import { getStudentsList } from "../services/auxiliatronService";

interface Student {
  id: number;
  name: string;
  semestre: number;
}

function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  const getStudents = async () => {
    const datos = await getStudentsList();
    if (datos !== null) {
      setStudents(datos);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <List>
      {students.map((student) => (
        <ListItem key={student.id}>
          <ListItemAvatar>
            <Avatar>
              {student.name.charAt(0)}
              {student.semestre}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={student.name}
            secondary={`Semester ${student.semestre}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default StudentList;
