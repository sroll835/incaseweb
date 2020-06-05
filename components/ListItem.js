import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  console.log("Mis List pro" + JSON.stringify(props))
  return (
   
    <List className={classes.root}>
        {props.clases.map(clase => (
           <>
          <ListItem key={clase.id_clase} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={clase.area}>{clase.id_clase}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={  <React.Fragment>
                   <Typography variant="subtitle1" color="secondary">
                   {clase.titulo}
                   </Typography>
            
              </React.Fragment>} 
          //   secondary={
          //     <React.Fragment>
             
          //       {clase.descripcion} 
             
         
          //   <br/><br/>
          //     Area: {clase.area}&nbsp;&nbsp;Duracion: {clase.duracion}h
            
            
          //   </React.Fragment>
          //   }
          />
      
      <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Go" color="secondary">
                      <ArrowForwardIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
         <Divider/>
           
         </>
        ))}
       
          
         </List>
  );
}
