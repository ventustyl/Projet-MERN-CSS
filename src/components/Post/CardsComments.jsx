import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils";

const CardsComments = ({ post }) => {
  const userData = useSelector((state) => state.rootReducer.userReducer);
  const usersData = useSelector((state) => state.rootReducer.usersReducer);
  const dispatch = useDispatch();

  return (
    <div className="comments-container">
      {post.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-client"
                : "comment-container"
            }
            key={comment._id}
          >
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === comment.commenterId)
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
        );
      })}
    </div>
  );
};

export default CardsComments;
