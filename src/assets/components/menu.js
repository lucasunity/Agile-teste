import React, { Component } from "react";

export const Menu = ({}) => {
  const clickMenu = async (ref) => {
    document.getElementById("id_general_barra").style.display = "none";
    document.getElementById("id_elenco_barra").style.display = "none";
    document.getElementById("id_premios_barra").style.display = "none";

    document.getElementById(ref + "_barra").style.display = "block";

    if (ref === "id_general") {
      document.getElementById("elenco_menu").style.display = "none";
      document.getElementById("general_menu").style.display = "flex";
      document.getElementById("premios_menu").style.display = "none";
    }

    if (ref === "id_elenco") {
      document.getElementById("elenco_menu").style.display = "flex";
      document.getElementById("general_menu").style.display = "none";
      document.getElementById("premios_menu").style.display = "none";
    }

    if (ref === "id_premios") {
      document.getElementById("elenco_menu").style.display = "none";
      document.getElementById("general_menu").style.display = "none";
      document.getElementById("premios_menu").style.display = "flex";
    }
  };

  return (
    <div style={{ display: "contents" }}>
      <div
        className="container-24"
        id="id_general"
        onClick={() => clickMenu("id_general")}
      >
        <p className="text3">GENERAL</p>
      </div>

      <div
        className="container-25"
        id="id_elenco"
        onClick={() => clickMenu("id_elenco")}
      >
        <p className="text3">ELENCO</p>
      </div>

      <div
        className="container-26"
        id="id_premios"
        onClick={() => clickMenu("id_premios")}
      >
        <p className="text3">PRINCIPALES PREMIOS</p>
      </div>
    </div>
  );
};
