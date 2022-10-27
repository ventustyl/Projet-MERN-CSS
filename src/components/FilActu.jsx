import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.action";
import Cards from "./Post/Cards";
import { isEmpty } from "./Utils";

const FilActu = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state)=> state.rootReducer.postReducer)

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
  <div className="thread-container">
    <ul className="fa-3x">
        {!isEmpty(posts[0]) && 
        posts.map((post)=> {
            return <Cards post={post} key={post._id} />
        })}
    </ul>
  </div>
    );
};

export default FilActu;
