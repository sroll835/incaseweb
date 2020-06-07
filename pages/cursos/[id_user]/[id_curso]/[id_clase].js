import React, { Component } from 'react';
import {connect} from "react-redux";
import Layout from '../../../../components/layout';
import MediaPlayer from '../../../../components/MediaPlayer';
 class ClaseComponent extends Component {
    
  render() {
    return (
        <Layout  auth={this.props.auth} userid={this.props.user_id}> 
         Hola {this.props.user_id} y bienvenido a su clase : {this.props.id_clase}

         <MediaPlayer/>
       </Layout>
    );
  }
}
ClaseComponent.getInitialProps = async ({ query }) => {
    console.log(query);
   console.log(query.id_clase + "Luna");
   var id_clase = query.id_clase
 // console.log("Hola " + JSON.stringify(clases));
  
  
   
     
    return { id_clase: id_clase};
  };
  
export default connect((state) => state)(ClaseComponent)
