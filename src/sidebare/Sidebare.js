import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HistoryIcon from "@material-ui/icons/History";
import "./sidebare.css";

const Sidebare = () => {
  return (
    <div className="sidebare_container">
      <div className="acceuil">
        <div className="homeIcon">
          <HomeOutlinedIcon />
        </div>
        <p>
          <span className="text_acceuil">Accueil</span>
        </p>
      </div>
      <div className="historique">
        <div className="historyIcon">
          <HistoryIcon />
        </div>

        <p>
          <span className="text_historique">Historique</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebare;
