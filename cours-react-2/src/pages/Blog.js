import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [blogData, setblogData] = useState([]);
  const [error, setError] = useState(false);

  const getData = () => {
    //READ
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setblogData(res.data));
  };

  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      //WRITE
      axios.post("http://localhost:3004/articles", {
        author,
        content, //équivaux à content : content
        date: Date.now(),
      });
      setError(false);
      setAuthor("");
      setContent("");
      getData();
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author} //permet de lier le formulaire aux variables
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} //style conditionnel, attention les double {{}}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {
          //logique du message d\'erreur
          error && <p>Veuillez écrire un minimu de 140 caractères</p>
        }
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;
