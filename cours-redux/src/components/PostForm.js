import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../actions/post.actions";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    if (title && content) {
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0,
      };
      await dispatch(addPosts(data)); //envoi les nouvelles données à la bdd et au state, async/await pour être certains que le getpost d'après puisse retourner les bonnes valeurs
      setTitle(""); //remet le form à vide
      setContent(""); //remet le form à vide
      dispatch(getPosts()); //appel à la bdd pour obtenir l'id du nouveau post
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          placeholder="Titre du poste"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Postez vos pensées..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
