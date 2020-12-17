import React from 'react'
import {s} from './ContactInfo.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles/withStyles';

  
const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
  },
  media: {
    height: 120,
   
  },
});


export default function MediaCard(props) {
  const classes = useStyles();

  return (
  	<>
    <Card className={classes.root}>
      <CardActionArea >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Контактная информация
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Фамилия Имя Отчество
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	</>
  );
}

/// const ContactInfo = ({}) => {
// 	<div className="mainBlock">
// 		 <div className="firstBlock">

// 		 </div>
// 	</div>
// }