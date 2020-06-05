
import Head from "next/head";
import Header from "../components/Header";
import { Component } from "react";
import  Link  from "next/link";
import fetch from "isomorphic-unfetch";
//import "../components/Login.scss";
import Layout from "../components/layout"
import { Cookies } from "react-cookie";
import Router from "next/router";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import { green, purple } from '@material-ui/core/colors';
import Modal from 'react-modal';
import { createUsuario } from "../API/helpersAPI";

const customStyles = {

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

  }
};
 
const appTitle = `WHATABYTE`;
const cookies = new Cookies();
var subtitle = "dddd" ;

    

class Login extends Component {

  static getInitialProps({ store,req }) {
    console.log("la store:"+store)

    const apiUrl = "http://localhost:8080/auth/login";
    
    return { apiUrl };
  }
 
  constructor(props) {
    super(props);
    const { send } = require("micro");
 
    this.state = {
      correo: "",
      clave: "",
      error: "",
      token: cookies.get("token") || null,
      modalIsOpen: false,
      nom_reg : "",
      apell_reg:"",
      correo_reg:"",
      clave_reg:""

    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeNomReg  = this.handleChangeNomReg.bind(this);
    this.handleChangeApellReg = this.handleChangeApellReg.bind(this);
    this.handleChangeCorreoReg  = this.handleChangeCorreoReg.bind(this);
    this.handleChangePasswordReg = this.handleChangePasswordReg.bind(this);
    this.createUser = this.createUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    Modal.setAppElement('body');
  } 

  // MODAL FUNCTIONS

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  
   afterOpenModal() {
    // references are now sync'd and can be accessed.
   // subtitle.style.color = '#f00';
  }
 
   closeModal(){
    this.setState({ modalIsOpen: false });
  }

  // HANDLE EVENT TO CHANGE THE STATE VALUE 

  handleChange(event) {
    this.setState({ correo: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ clave: event.target.value });
  }
  handleChangeNomReg(event) {
    this.setState({ nom_reg: event.target.value });
  }
   
  handleChangeApellReg(event){
    this.setState({ apell_reg: event.target.value });
  }
  handleChangeCorreoReg(event){
    this.setState({ correo_reg: event.target.value });
  }
  handleChangePasswordReg(event){
    this.setState({ clave_reg: event.target.value });
  }
  
  //  WEB SERVICES FUNCTIONS 

  async handleSubmit(event) {
    event.preventDefault();

    try {
      const _correo = this.state.correo;
      const _clave = this.state.clave;
      const url = this.props.apiUrl;
      const body = { correo: _correo, clave: _clave };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.status === 200) {
        const token = data.access_token;
        cookies.set("token", token);
        const action = { type: 'ADD_USER_ID' ,payload: data.user_id }
        this.props.dispatch(action);
        Router.push("/");
      } else {
        let error = new Error(data.message);
        error.data = data;
        this.setState({
          error: data.message,
        });
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );

      throw new Error(error);
    }
  }
 
async createUser() {
  
     let _toinsert =  {"nombre": this.state.nom_reg, "apellido":this.state.apell_reg,"correo": this.state.correo_reg, "clave": this.state.clave_reg};    
     createUsuario(_toinsert).then(response => 
      {
        console.log(response);
      }
    );
}

  render() {
    
    return (
      <div className="LayoutLogin">
        <Head>
          <title>WHATABYTE</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>

        <Header appTitle={appTitle} />
        <div className="Content">
          <div>
          <h3>Bienvenido a {appTitle} , Porfavor digite su usuario y contrasena :  </h3>           
          </div>
       
          <div className="login">
            <form>
              <label htmlFor="correo">Usuario</label>

              <input
                type="text"
                id="correo"
                name="correo"
                value={this.state.correo}
                onChange={this.handleChange}
              />
              <label htmlFor="clave">Contraseña</label>
              <input
                type="text"
                id="clave"
                name="clave"
                value={this.state.clave}
                onChange={this.handleChangePassword}
              />

              <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Iniciar Sesion
              </Button>
              
               <label>o</label>
         
               <a className="registertext" onClick={this.openModal}>Registrate</a>
              
                <p className={`error ${this.state.error && "show"}`}>
                {this.state.error && `Error: ${this.state.error}`}
              </p>
            </form>
          </div>
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <div className="headermodal">
              ¡ Regístrate y comienza a aprender &nbsp;!
              <button aria-label="Cerrar" type="button" className="modalclose" onClick={this.closeModal}><span aria-hidden="true">×</span></button>

              </div>
               <div className="contentmodal">
            
              <form>
                <label htmlFor="nombre">Nombre</label>

                <input
                  type="text"
                  id="nombre_reg"
                  name="nombre_reg"
                  value={this.state.nom_reg}
                  onChange={this.handleChangeNomReg}
                />
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido_reg"
                  name="apellido_reg"
                  value={this.state.apell_reg}
                  onChange={this.handleChangeApellReg}
                />
                 <label htmlFor="correo">Correo</label>
                <input
                  type="text"
                  id="correo_reg"
                  name="correo_reg"
                  value={this.state.correo_reg}
                  onChange={this.handleChangeCorreoReg}
                />
                 <label htmlFor="clave">Contraseña</label>
                <input
                  type="text"
                  id="clave_reg"
                  name="clave_reg"
                  value={this.state.clave_reg}
                  onChange={this.handleChangePasswordReg}
                />
                 <Button variant="contained" color="secondary" className="buttonregister" onClick={this.createUser}>
                Registrarse
              </Button>
              

              </form>
              <div className="secondarytext">
              Al registrarse, acepta nuestras 
               <a href="/terms/" target="_blank">condiciones generales de uso</a>
               y <a href="/terms/privacy/" target="_blank">nuestra política de privacidad</a>.
              </div>
              </div>
            </Modal>
          </div>
        </div>
        <style jsx>{`
          .login {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            text-align: center;
          }
          form {
            display: flex;
            flex-flow: column;
          }
          label {
            font-weight: 600;
          }
          input {
            padding: 8px;
            margin: 0.2rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: brown;
          }
          .error.show {
            display: block;
          }
          .headermodal{
            border-bottom: solid 1px #dedfe0;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            color: #29303b;
            display: block;
            font-weight: 700;
            font-size: 15px;
            padding: 24px 64px 24px 24px; 
          }
          .buttonregister{
            font-size: 16px;
            font-weight: 700;
            height: 48px;
            margin-bottom: 16px;
            width: 100%;
          }
          .contentmodal{
            padding: 24px 24px 16px;
          }
          .modalclose{
            color: #686f7a;
            font-size: 36px;
            font-weight: 400;
            opacity: 1;
            position: relative;
            z-index: 3;
            padding: 0 8px;
            background-color: white;
            border: none;
            overflow: hidden;
            margin-bottom: 0;
            margin-top: -8px;
            position: absolute;
            right: 24px;
            top: 24px;
          }
          .secondarytext{
            margin: 0 0 16px;
            margin-top: 10px;
            font-size: 10px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(
  (state) => state,

)(Login);
