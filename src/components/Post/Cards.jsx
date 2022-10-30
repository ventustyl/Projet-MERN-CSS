import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FollowHandler from "../Admin/FollowHandler";
import { dateParser, isEmpty } from "../Utils";
import Message from '../../images/icon/message1.svg'

import LikeButton from "./LikeButton";


const Cards = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state) => state.rootReducer.userReducer);
  const usersData = useSelector((state) => state.rootReducer.usersReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId)
                      return (
                        window.location.origin + "/image/profil" + user.picture
                      );
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {post.posterId !== userData._id && (
                <FollowHandler idToFollow={post.posterId} type={"card"} />)}
                <span>{dateParser(post.createdAt)}</span>
              </div>
              <p className="text-card">{post.message}</p>
         
              {post.picture ? ( <img src={ window.location.origin + "/image/post" + post.picture } className="img-flux" alt="perso"  /> ) : <></>}
    
              {post.video && (
              <iframe
                width="500"
                height="300"
                src={post.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img src={Message} alt="icon-message"/>
                <span>{post.comments.length}</span>
              </div>
       <LikeButton post={post}/>

            </div>
                
          
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Cards;
