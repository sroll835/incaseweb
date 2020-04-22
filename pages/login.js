import Head from "next/head";
import Header from "../components/Header";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import { login } from "../api/login";
import { Cookies } from "react-cookie";
import Router from "next/router";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import { green, purple } from '@material-ui/core/colors';
const appTitle = `WHATABYTE`;
const cookies = new Cookies();
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
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChange(event) {
    this.setState({ correo: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ clave: event.target.value });
  }

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

      console.log("Hillipoyas" + JSON.stringify(data));
      //console.log("status"+data.status)
      if (data.status === 200) {
        const token = data.access_token;
        cookies.set("token", token);
        const action = { type: 'ADD_USER_ID' ,payload: data.user_id }
        this.props.dispatch(action);
        console.log("Login succesfully");
        Router.push("/");
        //   const { access_token } = await response.json();
        //   login({ access_token });
      } else {
        console.log("Login failed.");

        // https://github.com/developit/unfetch#caveats
        let error = new Error(data.message);
        error.data = data;
        this.setState({
          error: data.message,
        });
        //  return Promise.reject(error);
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );

      throw new Error(error);
    }
  }

  render() {
    console.log("login" + JSON.stringify(this.props))
    return (
      <div className="Layout">
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
              <label htmlFor="correo">username</label>

              <input
                type="text"
                id="correo"
                name="correo"
                value={this.state.correo}
                onChange={this.handleChange}
              />
              <label htmlFor="clave">password</label>
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

          

              <p className={`error ${this.state.error && "show"}`}>
                {this.state.error && `Error: ${this.state.error}`}
              </p>
            </form>
          </div>
        </div>
        <style jsx>{`
          .login {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
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
            margin: 0.3rem 0 1rem;
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
        `}</style>
      </div>
    );
  }
}

export default  connect(
  (state) => state,
 
)(Login);
