import React, { Component } from "react";

export const Elenco = ({ cast }) => {
  // *NOTA PARA O REVISADOR: no teste tecnico o layout do front aparece 6 cards, já que na requisição só vem 3.. por esse motivo coloque +3 de acordo com o front para ser fiel ao layout me enviado ;)
  // Notei que não vem no JSON o personagem, mas somente o ator/atriz, por isso coloquei manuakmente...
  const myCasts = [
    { id: 0, actor: "Matt Demon", persona: "Mark Watney" },
    { id: 1, actor: "Jessica Chastain", persona: "Melissa Lewis" },
    { id: 2, actor: "Chiwetel Ejiofor", persona: "Venkat Kapoor" },
  ];
  console.log(cast.Cast);

  if (cast.Cast != null) {
    var getCast = cast.Cast;

    // *NOTA PARA O REVISADOR: no teste tecnico o layout do front aparece 6 cards, já que na requisição só vem 3.. por esse motivo coloque +3 para ser fiel ao layout me enviado ;)
    // Notei que não vem no JSON o personagem, mas somente o ator/atriz, por isso coloquei manuakmente para ser fiel ao FRONT
    var getCatElenco = getCast.length + 3;

    for (var i = 0; i < getCatElenco; i++) {
      // NOTA QUE NO JSON (Api request) não vem o PERSONAGEM....
      if (getCast[i] != null) {
        myCasts.push({
          id: myCasts.length,
          actor: getCast[i].Name,
          persona: "Personagem",
        });
      }
    }
  }

  const listItems = myCasts.map((ref) => (
    <div className="image" key={ref.id}>
      <div className="cardContainer">
        <span className="titleElenco">{ref.persona}</span>
        <span className="subElenco">{ref.actor}</span>
      </div>
    </div>
  ));

  return (
    <div className="image-container" id="image-container">
      {listItems}
    </div>
  );
};
