import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Summary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const showData = location.state?.showData;
    if (!showData) {
      navigate("/");
    }
  }, [location, navigate]);

  const showData = location.state?.showData;
  if (!showData) {
    return null;
  }

  const { name, type, status, language, summary, genres } = showData.show;
  const { score } = showData;

  const handleBookTicket = () => {
    localStorage.setItem("movieName", name);
    navigate("/book-ticket");
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 mt-5">
              <h2>{name}</h2>
              <div className="col-md-10 offset-md-1">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2">
                    Rating: {(score * 10).toFixed(2)} / 10
                  </h6>
                  <p className="card-text">
                    <strong>Type:</strong> {type}
                  </p>
                  <p className="card-text">
                    <strong>Genres:</strong> {genres.join(", ")}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {status}
                  </p>
                  <p className="card-text">
                    <strong>Language:</strong> {language}
                  </p>
                  <p className="card-text">
                    <strong>Summary:</strong> {summary}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleBookTicket}
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
