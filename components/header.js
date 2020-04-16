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
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <Menu customBurgerIcon={<img src={require("./image/menu1.png")} />}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="mis cursos" className="menu-item" href="/mis cursos">
            Mis cursos
          </a>
          <a id="perfil" className="bm-item menu-item" href="/perfil">
            Perfil
          </a>
        </Menu>
      </div>
    );
  }
}

export default Header;
