import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBio } from "../../actions/user.action";
import { dateParser } from "../Utils";
import UpdateImg from "./UpdateImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.rootReducer.userReducer);
  const usersData = useSelector((state) => state.rootReducer.usersReducer);
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const dispatch = useDispatch();
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <h2>Profil de {userData.pseudo}</h2>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img
            src={window.location.origin + "/image/profil" + userData.picture}
            alt="profil"
          />
          <UpdateImg />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Informations</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier info
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modification</button>
              </>
            )}
          </div>
          <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
          <h5 onClick={() => setFollowingPopup(true)}>
            Abonnements : {userData.following ? userData.following.length : "0"}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)}>
            Abonnés : {userData.followers ? userData.followers.length : "0"}
          </h5>
        </div>
      </div>
      {followingPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowingPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img
                          src={
                            window.location.origin +
                            "/image/profil" +
                            user.picture
                          }
                          alt="utilisateur"
                        />
                        <h4>{user.pseudo}</h4>
                        <p>A suivre</p>
                      </li>
                    );
                  }
                }
                // Rajouter pour corriger le souci avec le map et le return
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowersPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img
                          src={
                            window.location.origin +
                            "/image/profil" +
                            user.picture
                          }
                          alt="utilisateur"
                        />
                        <h4>{user.pseudo}</h4>
                        <p>A suivre</p>
                      </li>
                    );
                  }
                }
                // Rajouter pour corriger le souci avec le map et le return
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfil;
