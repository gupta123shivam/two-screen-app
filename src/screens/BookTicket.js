import React, { useState, useEffect } from "react";

const TicketBookingForm = () => {
  const [movieName, setMovieName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Get movie name from local storage
    const storedMovieName = localStorage.getItem("movieName");
    if (storedMovieName) {
      setMovieName(storedMovieName);
    }

    // Get user details from local storage if available
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      const { name, email } = JSON.parse(storedUserDetails);
      setName(name);
      setEmail(email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    // Store user details in local storage
    const userDetails = {
      name,
      email
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Right now it does not do anything
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h2>Book Ticket</h2>
          <p>
            Movie: <strong>{movieName}</strong>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mx-auto"
              disabled={success}
            >
              Submit
            </button>
          </form>
          {success ? (
            <div className="alert alert-success mt-3" role="alert">
              Show ticket booked successfully.
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketBookingForm;
