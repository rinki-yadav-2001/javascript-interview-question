import React from "react"
function Beer({ name, image_url, description, tagline}) {

    return (
      <div className="beer">
        <img src={image_url} alt={name} />
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Beer;