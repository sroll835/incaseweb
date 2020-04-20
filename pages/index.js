import Link from "next/link";
import { Cookies } from "react-cookie";
import Layout from "../components/layout";
import { auth } from "../utils/auth";
import Router from "next/router";
// set up cookies
const cookies = new Cookies();
const Index = (props) => (
  <Layout>
    <br />
    <Link href="/index">
      <a> Welcome to WHATABYTE! Start Exploring Now</a>
    </Link>
  </Layout>
);
Index.getInitialProps = async (ctx) => {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router
  const auth_token = await auth(ctx);
  if (auth_token === null) {
    Router.push("/login");
  }

  // Must return an object
  return { auth_token };
};

export default Index;
