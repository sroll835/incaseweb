import Layout from "../../components/layout";
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
    return (
      <Layout>
        <h1>hola soy el usuario: {this.state.nombre}</h1>
      </Layout>
    );
  }
}

UserProfile.getInitialProps = async ({ query }) => {
  var usuario = query.id_user.split("_")[1];
  const res = await fetch("http://localhost:8080/usuarios/" + usuario);
  const resJSON = await res.json();
  return { dataUsuario: resJSON };
};

export default UserProfile;
