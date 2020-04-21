
// import App from 'next/app'

import App from "next/app";
import React from "react";
import { Provider } from 'react-redux'
import store from '../store/ConfigureStore'
class IncaseWeb extends App {

   
  /*static async getInitialProps({Component, ctx}) {
  console.log("Solo entre al app una vez")
    // we can dispatch from here too
    ctx.store.dispatch({type: 'ADD_REG_PONTO', value: [{"name": "Manuel Felipe", "ndoc": 1018484513,"horaingreso":"07:00:00 AM", "horasalida":""},
    {"name": "Daneil Felipe", "ndoc":79280440,"horaingreso":"07:12:02 AM", "horasalida":""}
    ]});
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  
    return {pageProps};
}*/
    render() {
        const {Component, pageProps} = this.props;
  //console.log("hello _app,js")
        //console.log(this.props.data); <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        return (
               <Provider  store={store}>
                 <Component {...pageProps} />
               </Provider>
               
         
           
        );
    }

}

  
  // Only uncomment this method if you have blocking data requirements for  </PersistGate>
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default (IncaseWeb); 