import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import FilActu from "../components/FilActu";
import NewPostForm from "../components/Post/NewPostForm";
import Log from "../components/Log";
import "../styles/styles.scss";
import "../styles/connexion.scss";
import Tendances from "../components/Tendances";
import Friends from "../components/Admin/Friends";

const Journal = () => {
  const uid = useContext(UidContext);

  return (
    <div className="flex">
      <h1>Réseau Social</h1>
      <div className="flextest">
        <div className="main">
          <div className="journal-header">
            {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
          </div>
          <FilActu />
        </div>
        <div className="right-side">
          <div className="right-side-container">
            <div className="wrapper">
              <Tendances />
              {uid && <Friends/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
