import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";

import navButtons from "../config/buttons";

const Layout = (props) => {
  
  let candoAction = true;
  
  props.auth ? candoAction : !candoAction;
  //console.log("can" + candoAction)
  const appTitle = `> WHATABYTE`;
  //console.log("lAYOTU :" + JSON.stringify(props));
  return (
    <div className="Layout">
      <Head >
        <title>WHATABYTE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} candoAction={candoAction}  />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} userid={props.userid} />
    </div>
  );
};

export default Layout;
