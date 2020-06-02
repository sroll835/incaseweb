import Layout from "../../components/layout";
import {connect} from "react-redux";
import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout  auth={this.props.auth} userid={this.props.user_id} > 
        <h1>hola soy el usuario: {this.props.queryby}</h1>
      </Layout>
    );
  }
}

UserProfile.getInitialProps = async ({ query }) => {
  console.log(query);
   
  return { queryby: query.id_user };
};
export default  connect((state) => state)(UserProfile);
