import React, { Component } from 'react';
import Layout from '../../../components/layout';
import {connect} from "react-redux";
class CursoComponent extends Component {
  constructor(props) {
    super(props);  
    console.log("cursor props " + JSON.stringify(this.props));
    //const classes = useStyles();
  }
  render() {
    return (
      <Layout>
        curso content
      </Layout>
    );
  }
}

CursoComponent.getInitialProps = async ({ query }) => {
    console.log(query);
   
   var id_usuario = query.id_user.split('_')[1];   
   //var userwithcursos = await getUserwithCursosByUserId(id_usuario);
   //var cursos = userwithcursos[0].cursos;
   //console.log("Hola " + userwithcursos[0].cursos);
  
  
   
     
    return { queryby: query.id_user };
  };
  export default connect((state) => state)(CursoComponent);