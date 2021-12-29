import React from "react";
import AddTodoCm from "../app/AddTodoCm";
import Poste from "../app/Poste/Poste";
import { getPosts } from "../Historique/Historique.service";
import { HomeWrapper } from "../Historique/Historique.style";
import { useState, useEffect } from "react";

const Home = () => {
  const [posteInPr, setPosteInPr] = useState([]);
  useEffect(() => {
    setPosteInPr(getPosts.filter((post) => post.status == "inProgress"));
  }, []);

  return (
    <div className="inner_app_content">
      <AddTodoCm />
      <HomeWrapper theme={{ top: "320px", left: "370px" }}>
        <Poste posts={posteInPr} />
      </HomeWrapper>
    </div>
  );
};

export default Home;
