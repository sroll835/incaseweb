import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import { login } from "../api/login";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
class Login extends Component {
  static getInitialProps ({ req }) {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

    const apiUrl = 'http://localhost:8080/auth/login'

    return { apiUrl }
  }

  constructor(props) {
    super(props);
    const {  send } = require('micro')

    this.state = { correo: "", clave:"", error: "",   token: cookies.get('token') || null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChange(event) {
    this.setState({ correo: event.target.value });
  }
  
handleChangePassword(event)
{
  this.setState({ clave: event.target.value });
}

  async handleSubmit(event) {
    event.preventDefault();
   
    try {
      const _correo = this.state.correo;
      const _clave = this.state.clave;
      const url = this.props.apiUrl;
     const body = { correo: _correo,clave: _clave };
      const response = await fetch(url, {
        method: "POST",
        headers: { 
        'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
    
      console.log("Hillipoyas" + JSON.stringify(data));
    //console.log("status"+data.status)
      if (data.status === 200) {
        const token = data.access_token;
       cookies.set('token', token);
       this.setState({
         token: token
       })
       console.log("Login succesfully")       

     //   const { access_token } = await response.json();
     //   login({ access_token });
      } else {
        console.log("Login failed.");
        
        // https://github.com/developit/unfetch#caveats
        let error = new Error(data.message);
        error.data = data;
        this.setState({ 
          error: data.message
        })
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
    return (
      <Layout>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
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

            <button type="submit">Login</button>

            <p className={`token ${!this.state.token && "show"}`}>
              {this.state.token && `Token: ${this.state.token}`}
            </p>
             
            <p className={`error ${this.state.error && "show"}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>
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
      </Layout>
    );
  }
}

export default Login;
