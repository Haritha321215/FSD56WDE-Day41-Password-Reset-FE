import { useState } from "react";
import userServices from "../services/userServices";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    console.log("email:"+email);
    userServices
      .forgotpassword(email)
      .then((response) => {
        // clear the form
        e.target.reset();
        if (response.data.success) {
          setSuccessMessage(response.data.message);
        } else {
          setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // if there is an error, log the error to the console
        alert("An error occurred, please try again later.");
      });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-between g-2 p-3">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <div className="mb-2">
        <input type="email" placeholder="Enter your email" />
      </div>
      <button className="btn btn-outline-dark btn-sm" type="submit">Submit</button>
      <Link to="/login">Login</Link>
      </form>

    </div>
  );
}

export default ForgotPassword;
