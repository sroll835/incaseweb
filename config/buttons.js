// config/buttons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faBook, faUser } from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Explorar",
    path: "/explorar",
    icon: <FontAwesomeIcon icon={faCompass} />,
  },
  {
    label: "Mis cursos",
    path: "/mis_cursos",
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  {
    label: "Perfil",
    path: "/usuarios",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];

export default navButtons;
