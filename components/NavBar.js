// components/NavBar.js

import "./NavBar.scss";
import NavButton from "./NavButton";


const NavBar = (props) => (

  <div className="NavBar">
    {props.navButtons.map((button) => {
      //console.log(JSON.stringify(props) + "NAV")
      if(button.path === '/usuarios'){
       return(
      
      <NavButton
        key={button.path}
        path={button.path + '/'+ props.userid}
        label={button.label}
        icon={button.icon}

      />

    )}
    if(button.path === '/cursos'){
      return(
     
     <NavButton
       key={button.path}
       path={button.path + '/'+ props.userid}
       label={button.label}
       icon={button.icon}

     />

   )}


    return(
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}

      />
    )
    })}
  </div>
);

export default NavBar;
