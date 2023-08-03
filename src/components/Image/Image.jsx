import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Image.css";
import Loading from "../Loading";

const apiUrl =
  "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";

const Image = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [imageInfo, setImageInfo] = useState({});
  async function fetchApi() {
    setLoading(true);
    const response = await axios.get(apiUrl);
    const imageData = [...response.data.photos];
    let imageId = imageData.find((image) => image.id == id);
    setImageInfo({ ...imageId });
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="Image-Wrapper">
      {loading ? (
        <Loading />
      ) : (
        <div className="Image">
          <div className="img">
            <img src={imageInfo.url} alt={imageInfo.title} />
          </div>
          <div className="imageInfo">
            <h1 className="title">{imageInfo.title}</h1>
            <p className="description">{imageInfo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Image;
