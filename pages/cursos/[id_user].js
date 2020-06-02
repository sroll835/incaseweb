import Layout from "../../components/layout";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import CardCurso from "../../components/CardCurso";
import {connect} from "react-redux";
import { getUserbyid, getUserwithCursosByUserId } from "../../API/helpersAPI";


class UserCursos extends Component {
  constructor(props) {
    super(props);  
    //console.log("User props " + JSON.stringify(this.props));
    //const classes = useStyles();
  }

  render() {
    return (
      <Layout auth={this.props.auth} userid={this.props.user_id}>
          {  this.props.cursos_usuario.map(curso =>(
               <CardCurso key={curso.id_curso} curso ={curso}/>
          ))  }
       
      </Layout>
    );
  }
}

UserCursos.getInitialProps = async ({ query }) => {
  console.log(query);
 
 var id_usuario = query.id_user.split('_')[1];   
 var userwithcursos = await getUserwithCursosByUserId(id_usuario);
 var cursos = userwithcursos[0].cursos;
 //console.log("Hola " + userwithcursos[0].cursos);


 
   
  return { queryby: query.id_user, cursos_usuario: cursos };
};
export default connect((state) => state)(UserCursos);
