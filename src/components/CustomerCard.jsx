import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


export function CustomerCard({name,lastname,avatar,email}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={name}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
