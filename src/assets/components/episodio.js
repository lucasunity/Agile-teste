import React, { Component } from "react";

export const Episodio = ({ temporadas, selectTemporada }) => {
  const getEpisodios = [];

  for (var i = 0; i < temporadas.length; i++) {
    if (temporadas[i] != null) {
      let idTemporadas = temporadas[i].ID.replace(/[^0-9.]+/, "");
      getEpisodios.push({
        id: i,
        Title: temporadas[i].Title,
        ref: idTemporadas,
        image: temporadas[i].Image,
        synopsis: temporadas[i].Synopsis,
      });
    }
  }

  const clickContainer = (id) => {
    if (
      document.getElementById("id_episodio_" + id).style.display === "block"
    ) {
      document.getElementById("id_episodio_" + id).style.display = "none";
    } else {
      document.getElementById("id_episodio_" + id).style.display = "block";
    }

    for (var i = 0; i < temporadas.length; i++) {
      if (temporadas[i] !== null) {
        if (id !== i) {
          document.getElementById("id_episodio_" + i).style.display = "none";
        }
      }
    }
  };

  const listItems = getEpisodios.map((ref) => (
    <div className="container-13" key={ref.id} id={"id_card_" + ref.id}>
      <div
        className="container-30"
        id={"id_container_" + ref.id}
        onClick={() => {
          clickContainer(ref.id);
        }}
      >
        <p className="text2">
          {ref.ref} {ref.Title}
        </p>

        <div className="play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="19" stroke="#D8D8D8" strokeWidth="2" />
              <path
                fill="#D8D8D8"
                d="M14.881 13.957v12.924a1 1 0 0 0 1.503.864l10.983-6.388a1 1 0 0 0 .008-1.724l-10.983-6.535a1 1 0 0 0-1.51.86z"
              />
            </g>
          </svg>
        </div>
      </div>

      <div
        className="episode"
        id={"id_episodio_" + ref.id}
        style={{ display: "none" }}
      >
        <div className="imgEpisode">
          <img className="imgEpisode" src={ref.image} />
          <div className="divCap">
            <div style={{ display: "flex", width: "100%" }}>
              <div className="divCapR" />
            </div>
          </div>
        </div>

        <div className="episodeDescription">
          <div className="divEpisode">
            <p className="text7">{ref.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{listItems}</div>
  );
};
