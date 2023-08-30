import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const StudentCard = ({ name, semester }) => {
  const initial = name ? name.charAt(0).toUpperCase() : '';

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Avatar sx={{ width: 56, height: 56, fontSize: 28, marginRight: 2 }}>
              {initial}
            </Avatar>
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography color="text.secondary">Semester: {semester}</Typography>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StudentCard;
