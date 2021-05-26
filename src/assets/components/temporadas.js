import React, { Component } from "react";

export const BarraTemporadas = ({ temporadas }) => {
  const getTemporadas = [];

  for (var i = 0; i < temporadas.length; i++) {
    getTemporadas.push(i);
  }

  const listItems = getTemporadas.map((number) => (
    <div
      className="container-11r"
      key={number}
      id={"barraTemporadas" + number}
    />
  ));

  return <div style={{ display: "flex" }}>{listItems}</div>;
};

export const Temporadas = ({ temporadas }) => {
  const getTemporadas = [];

  for (var i = 0; i < temporadas.length; i++) {
    getTemporadas.push(i);
  }

  const clickContainer = async (id) => {
    for (var i = 0; i < getTemporadas.length; i++) {
      if (i !== id) {
        document.getElementById("barraTemporadas" + i).style.backgroundColor =
          "#27272700";
      } else {
        document.getElementById("barraTemporadas" + id).style.backgroundColor =
          "#2bd800";
      }
    }
  };

  const listItems = getTemporadas.map((number) => (
    <div
      className="container-11"
      key={number}
      onClick={() => {
        clickContainer(number);
      }}
    >
      <p className="text1">T{number}</p>
    </div>
  ));

  return <div style={{ display: "flex" }}>{listItems}</div>;
};
