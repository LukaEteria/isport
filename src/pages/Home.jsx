import React from "react";
import "../App.css";

import Reclamscomponenet from "../assets/Reclamscomponenet";
import Reclamtwo from "../assets/Reclamtwo";
import Header from "../assets/Header";
import Maincontent from "../assets/Maincontent";
import News from "../assets/News";

export default function Home() {
  return (
    <div className="contiaenr">
      <div className="Reclam_one">
        <Reclamscomponenet />
      </div>
      <Reclamtwo />
      <Header />
      <div className="content_contaienr">
        <Maincontent />
        <News />
      </div>
    </div>
  );
}
