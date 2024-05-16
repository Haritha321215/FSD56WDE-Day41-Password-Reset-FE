import { Link, useParams } from "react-router-dom";
import userServices from "../services/userServices";

function ResetPasswordPage() {
  const { token } = useParams(); // Get token from URL params

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    userServices
      .resetPassword(token, password)
      .then((response) => {
        // clear the form
        e.target.reset();
        alert("reset passowrd successfully");
      })
      .catch((error) => {
        // if there is an error, log the error to the console
        alert("An error occurred, please try again later.");
      });
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-between g-2 p-3">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="password" placeholder="New Password" />
        </div>
        <div className="mb-2">
          <input type="password" placeholder="Confirm New Password" />
        </div>

        <button className="btn btn-outline-dark btn-sm" type="submit">
          Reset Password
        </button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
