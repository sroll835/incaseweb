import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  //console.log("Card props" + JSON.stringify(props));
  const curso = props.curso;
  //console.log(curso.titulo)
  
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
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
