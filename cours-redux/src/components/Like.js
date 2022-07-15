import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLike } from "../actions/post.actions";
import { addUserLike } from "../actions/user.actions";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      //avec mongodb, pas besoin de tout repasser, uniquement car json server ne le fais pas tout seul
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post.id,
    };
    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id,
    };

    dispatch(addLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div onClick={handleLike()}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
