import Link from "next/link";
import { Cookies } from "react-cookie";
import Layout from "../components/layout";
import { auth } from "../utils/auth";
import Router from "next/router";
import {connect} from "react-redux";
// set up cookies
const cookies = new Cookies();
function Index(props){
    console.log("mis props" + JSON.stringify(props))
  return(
  
  <Layout auth={props.auth} userid={props.user_id} >
    <br />
    <Link href="/index">
      <a> Welcome to WHATABYTE! Start Exploring Now</a>
    </Link>
  </Layout>
);
}
Index.getInitialProps = async (ctx) => {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router
  const auth_token = await auth(ctx);
  if (auth_token === null) {
    console.log("No tengo token ")
    Router.push("/login");
  }

  // Must return an object
  return { auth : auth_token };
};

 export default  connect(
  (state) => state,
 
)(Index);
