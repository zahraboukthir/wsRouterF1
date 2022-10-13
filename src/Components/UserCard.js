import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card =(user)=> (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="h5" component="div">
        {user.username}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {user.email}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Link to={`/details/${user.id}`}><Button size="small">Learn More</Button></Link>
    </CardActions>
  </React.Fragment>
);

export default function UserCard({user}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" >{card(user)}</Card>
    </Box>
  );
}

 