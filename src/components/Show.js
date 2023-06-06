import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Show = ({ item }) => {
  const navigate = useNavigate();

  const { show } = item;
  const { name, image, type, genres, status, language } = show;

  const handleNavigateSummary = () => {
    navigate("/summary", { state: { showData: item } });
  };

  return (
    <div className="card mb-5">
      <div className="row no-gutters">
        <div className="col-md-5">
          <img src={image.medium} className="card-img" alt="Show Poster" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <strong>Genres</strong>: {genres.join(", ")}
            </p>
            <p className="card-text">
              <strong>Language</strong>: {language}
            </p>
            <button className="btn btn-success" onClick={handleNavigateSummary}>
              Go to Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
