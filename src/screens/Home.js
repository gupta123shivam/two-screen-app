import React, { useState, useEffect, useContext, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Show } from "../components";
import reloadIcon from "../assets/icon/refresh-page-option.png";

const Home = ({ setData: setSummaryData }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("all");

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [searchTerm]);

  /*  As soon as user comes to this screen, some shows will be shown right away */

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefetch = () => {
    fetchData();
  };
  // console.log(data[0].show);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-8 offset-md-3 mt-5"
          style={{ maxWidth: "640px" }}
        >
          <h2 className="">TV Shows</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter search term"
              value={searchTerm === "all" ? "" : searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isLoading}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={fetchData}>
                Search
              </button>
            </div>

            {/* Refetch button */}
            <button
              className="btn btn-outline-secondary"
              onClick={handleRefetch}
              disabled={isLoading}
              style={{
                marginLeft: "10px",
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer"
              }}
            >
              <img src={reloadIcon} alt="Reload Icon" width="20" height="20" />
            </button>
          </div>

          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : data ? (
            <div className="card mb-3" style={{ width: "100%" }}>
              {data.map((item) => (
                <Show
                  key={item.show.id}
                  item={item}
                  setSummaryData={setSummaryData}
                />
              ))}
            </div>
          ) : (
            "Nothing to show. Please search another term."
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
