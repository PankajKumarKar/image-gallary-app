import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ImageList from "../ImageList.jsx/ImageList";

import "./Gallary.css";
import Loading from "../Loading";

const apiUrl =
  "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";

const Gallary = () => {
  const [loading, setLoading] = useState(true);
  const [imageData, setImageData] = useState([]);

  async function fetchApi() {
    setLoading(true);
    const response = await axios.get(apiUrl);
    const imageArray = response.data.photos;
    setImageData([...imageArray]);
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="Gallary">
      <h1>Gallary Photos</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="imageList">
          {imageData.map((image) => (
            <ImageList key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallary;
