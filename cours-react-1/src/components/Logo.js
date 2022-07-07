import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis balise img sont accessibled dans "public" */}
      <img src="./logo192.png" alt="logo du site" />
      <h3>Cours 1/2</h3>
    </div>
  );
};

export default Logo;
