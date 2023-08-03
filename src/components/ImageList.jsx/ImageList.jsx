import React from "react";
import "./ImageList.css";
import { Link } from "react-router-dom";

const ImageList = ({ image }) => {
  return (
    <div className="imageDiv">
      <Link to={`/photos/${image.id}`}>
        {" "}
        <img src={image.url} alt={image.title} />
      </Link>
    </div>
  );
};

export default ImageList;
