import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/material/styles';



interface Student {
  id: number;
  name: string;
  semester: number;
}

function StudentList() {

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Fetch data
    fetch('YOUR_API_ENDPOINT')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <List>
      {students.map((student) => (
        <ListItem key={student.id}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              {student.name.charAt(0)}{student.semester}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={student.name} secondary={`Semester ${student.semester}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default StudentList;