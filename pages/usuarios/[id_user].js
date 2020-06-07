import Layout from "../../components/layout";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Container, Box } from "@material-ui/core";
import { updateUsuario } from "../../api/helpersAPI";
import {connect} from "react-redux";
const stylebutton = {
  background: "linear-gradient(45deg, #409946 30%, #66BB6A 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  width: "100%",
  height: 48,
  padding: "0 10px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  // marginLeft: 20,
  marginTop: 5,
  // marginRight: 20
};

const textinput = {
  background: "linear-gradient(45deg, #fafafa 30%, #f5f5f5 90%)",
  borderRadius: 3,
  fontSize: 18,
  fontFamily: "Garamond",
  color: "black",
  height: 35,
  padding: "0 10px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

const textinputdisabled = {
  background: "#e0e0e0",
  borderRadius: 3,
  fontSize: 18,
  fontFamily: "Garamond",
  color: "black",
  height: 35,
  padding: "0 20px",
};

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disable: true,
      id_usuario: this.props.id_usuario,
      nombre: this.props.dataUsuario[0].nombre,
      apellido: this.props.dataUsuario[0].apellido,
      correo: this.props.dataUsuario[0].correo,
      imagen: this.props.dataUsuario[0].imagen,
      clave: this.props.dataUsuario[0].clave,
    };

    console.log(this.state);

    this.handleNombreChange = this.handleNombreChange.bind(this);
    this.handleApellidoChange = this.handleApellidoChange.bind(this);
    this.handleCorreoChange = this.handleCorreoChange.bind(this);
    this.handleClaveChange = this.handleClaveChange.bind(this);
  }

  handleNombreChange(event) {
    this.setState({ nombre: event.target.value });
  }

  handleApellidoChange(event) {
    this.setState({ apellido: event.target.value });
  }

  handleCorreoChange(event) {
    this.setState({ correo: event.target.value });
  }

  handleClaveChange(event) {
    this.setState({ clave: event.target.value });
  }

  handleUpdateUser() {
    if (this.state.disable) {
      this.setState({ disable: !this.state.disable });
    }
  }

  handleSaveUser() {
    var userupdt = [
      {
        id_usuario: this.state.id_usuario,
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        correo: this.state.correo,
        clave: this.state.clave,
      },
    ];
    updateUsuario(userupdt[0]);
    console.log("toupdate" + userupdt);
    this.setState({ disable: true });
  }

  render() {
    return (
      <Layout auth={this.props.auth} userid={this.props.user_id}>
        <Box className="containerDataUser">
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>
                  <input
                    type="text"
                    style={this.state.disable ? textinputdisabled : textinput}
                    disabled={this.state.disable ? "disabled" : ""}
                    value={this.state.nombre}
                    onChange={this.handleNombreChange}
                  />
                </th>
              </tr>
              <tr>
                <th>Apellido</th>
                <th>
                  <input
                    type="text"
                    style={this.state.disable ? textinputdisabled : textinput}
                    disabled={this.state.disable ? "disabled" : ""}
                    value={this.state.apellido}
                    onChange={this.handleApellidoChange}
                  />
                </th>
              </tr>
              <tr>
                <th>E-mail</th>
                <th>
                  <input
                    type="email"
                    style={this.state.disable ? textinputdisabled : textinput}
                    disabled={this.state.disable ? "disabled" : ""}
                    value={this.state.correo}
                    onChange={this.handleCorreoChange}
                  />
                </th>
              </tr>

              <tr>
                <th>Clave</th>
                <th>
                  <input
                    type="password"
                    style={this.state.disable ? textinputdisabled : textinput}
                    disabled={this.state.disable ? "disabled" : ""}
                    value={this.state.clave}
                    onChange={this.handleClaveChange}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleUpdateUser.bind(this)}
        >
          Modificar usuario
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSaveUser.bind(this)}
        >
          Guardar
        </Button>
      </Layout>
    );
  }
}

UserProfile.getInitialProps = async ({ query }) => {
  var usuario = query.id_user.split("_")[1];
  const res = await fetch("http://localhost:8080/usuarios/" + usuario);
  const resJSON = await res.json();
  return { dataUsuario: resJSON, id_usuario: usuario };
};

export default connect((state) => state)(UserProfile);
