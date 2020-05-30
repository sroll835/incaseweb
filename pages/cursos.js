import React, { Component } from 'react';
import Layout from '../components/layout';
import {connect} from "react-redux";
 class Curso extends Component {

    constructor(props){
    super(props)
    
    }
  
    render() {
      console.log("Mis cursos" + JSON.stringify(this.props));
        return (
            <Layout> jajaja </Layout>
        );
    }
}

export default connect((state) => state)(Curso)
