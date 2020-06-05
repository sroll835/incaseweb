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
  }
}

CursoComponent.getInitialProps = async ({ query }) => {
    console.log(query);
   console.log(query.id_curso + "Luna");
   var id_curso = query.id_curso
   var cursoswithclasses = await getCursowithClassesByIdCurso(id_curso);
   var clasesret = cursoswithclasses[0].clases;
 // console.log("Hola " + JSON.stringify(clases));
  
  
   
     
    return { clases: clasesret};
  };
  export default connect((state) => state)(CursoComponent);