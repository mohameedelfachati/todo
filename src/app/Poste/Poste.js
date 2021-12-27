import React from "react";
import { HomeWrapper } from "../../Historique/Historique.style";
import "./Poste.css";

const Poste = () => {
  return (
    <HomeWrapper theme={{ top: "320px", left: "370px" }}>
      <div className="poste_container">
        <div className="text_container">
          <div className="sub_text_container">
            <t2 className="todo">
              ETQDev, je veux initialiser le projet à l'aide de create-react-app
            </t2>
            <div className="priority">
              <div className="important">importante</div>
            </div>
          </div>
          <p className="todo_text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta .
          </p>
        </div>
        <div className="button_Add">
          <button className="button_terminé">Terminé</button>
          <button className="button_annuler">Annuler</button>
        </div>
      </div>
      <div className="poste_container">
        <div className="text_container">
          <div className="sub_text_container">
            <t2 className="todo">
              ETQDev, je veux initialiser le projet à l'aide de create-react-app
            </t2>
            <div className="priority">
              <div className="important">importante</div>
            </div>
          </div>
          <p className="todo_text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta .
          </p>
        </div>
        <div className="button_Add">
          <button className="button_terminé">Terminé</button>
          <button className="button_annuler">Annuler</button>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Poste;
