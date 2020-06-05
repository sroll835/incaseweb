<<<<<<< HEAD
import React, { Component } from "react";
import Layout from "../../../components/layout";
import { connect } from "react-redux";

class CursoComponent extends Component {
  constructor(props) {
    super(props);
    console.log("cursor props " + JSON.stringify(this.props));
    //const classes = useStyles();
  }
  render() {
    return <Layout>curso content</Layout>;
=======
import React, { Component } from 'react';
import Layout from '../../../components/layout';
import {connect} from "react-redux";
import { getCursowithClassesByIdCurso } from '../../../API/helpersAPI';
import AlignItemsList from '../../../components/ListItem';
class CursoComponent extends Component {
  constructor(props) {
    super(props);  
    //console.log("cursor props " + JSON.stringify(this.props));
    //const classes = useStyles();
  }
  render() {
    return (
      <Layout  auth={this.props.auth} userid={this.props.user_id}> 
       <AlignItemsList clases={this.props.clases}/>
      </Layout>
    );
>>>>>>> d7fd501b680c463add6c5d48f78044268817df56
  }
}

CursoComponent.getInitialProps = async ({ query }) => {
<<<<<<< HEAD
  console.log(query);

  var id_usuario = query.id_user.split("_")[1];
  //var userwithcursos = await getUserwithCursosByUserId(id_usuario);
  //var cursos = userwithcursos[0].cursos;
  //console.log("Hola " + userwithcursos[0].cursos);

  return { queryby: query.id_user };
};
export default connect((state) => state)(CursoComponent);
=======
    console.log(query);
   console.log(query.id_curso + "Luna");
   var id_curso = query.id_curso
   var cursoswithclasses = await getCursowithClassesByIdCurso(id_curso);
   var clasesret = cursoswithclasses[0].clases;
 // console.log("Hola " + JSON.stringify(clases));
  
  
   
     
    return { clases: clasesret};
  };
  export default connect((state) => state)(CursoComponent);
>>>>>>> d7fd501b680c463add6c5d48f78044268817df56
