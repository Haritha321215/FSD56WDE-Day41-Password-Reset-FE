import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

const Login = () => {
  const navigate = useNavigate();


  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // send the details to the API
    userServices
      .login(email, password)
      .then((response) => {
        // clear the form
        e.target.reset();
        alert("Login successful");

        // if the login is successful, redirect to the dashboard page
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      })
      .catch((error) => {
        console.error("Error:", error);
        // if there is an error, log the error to the console
        alert("Login failed");
      });
  };
  

  return (
    <div className="d-flex flex-column align-items-center justify-content-between g-2 p-3">
      <form onSubmit={handleLogin}>
        <div className="mb-2">
          <input type="email" placeholder="Email..." />
        </div>
        <div className="mb-2">
          <input type="password" placeholder="Password..." />
        </div>
        <button type="submit">Login</button>
        <Link to="/forgotpassword">Forgot Password</Link>
        <p className="mt-1">
          Do not have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
