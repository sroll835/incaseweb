import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Router from "next/router";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function CardCurso(props) {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  //Dispatch curso to our global state container
  const action = { type: 'ADD_CURSOS' ,payload: props.curso };
  props.dispatch(action);
  const curso = props.curso;
  const user_id = props.user_id;
  function handleSubmit(){
    Router.push("/cursos/"+user_id+"/"+curso.id_curso);
  }
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {curso.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {curso.descripcion}
          </Typography>
          <br/><br/>
          <Typography variant="caption" component="p" align="right">
           Duracion:{curso.duracion}&nbsp;&nbsp;&nbsp;NºClases:{curso.numero_clases} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Continuar 
        </Button>
        <Button size="small" color="primary" onClick={handleSubmit}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
