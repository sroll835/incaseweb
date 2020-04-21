import "./Header.scss";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

const style = {
  background: "linear-gradient(45deg, #66bb6a 30%, #a5d6a7 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};
import Button from "@material-ui/core/Button";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    console.log("Header props" + JSON.stringify(this.props))
    if(this.props.candoAction){
      
      return <div className="Header">
      Whatabyte
      <div  style={{  float:'right', margin: 10 }}>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      </div>
   
       </div>;
    }
    return <div className="Header"> Whatabyte</div>;
  }
}

export default Header;
