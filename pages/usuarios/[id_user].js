import Layout from "../../components/layout";
<<<<<<< HEAD
=======
import {connect} from "react-redux";
>>>>>>> 14eef1412d1f89d047017e2e49cf589324637e49
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: this.props.dataUsuario[0].nombre,
      apellido: this.props.dataUsuario[0].apellido,
      correo: this.props.dataUsuario[0].correo,
      clave: this.props.dataUsuario[0].clave,
    };
  }

  render() {
    console.log(JSON.stringify(this.props) + "hola amigos");
    return (
<<<<<<< HEAD
      <Layout>
        <h1>hola soy el usuario: {this.state.nombre}</h1>
=======
      <Layout  auth={this.props.auth} userid={this.props.user_id} > 
        <h1>hola soy el usuario: {this.props.queryby}</h1>
>>>>>>> 14eef1412d1f89d047017e2e49cf589324637e49
      </Layout>
    );
  }
}

UserProfile.getInitialProps = async ({ query }) => {
<<<<<<< HEAD
  var usuario = query.id_user.split("_")[1];
  const res = await fetch("http://localhost:8080/usuarios/" + usuario);
  const resJSON = await res.json();
  console.log(resJSON);
  return { dataUsuario: resJSON };
};

export default UserProfile;
=======
  console.log(query);
   
  return { queryby: query.id_user };
};
export default  connect((state) => state)(UserProfile);
>>>>>>> 14eef1412d1f89d047017e2e49cf589324637e49
