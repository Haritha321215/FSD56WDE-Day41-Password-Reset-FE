import userServices from "../services/userServices";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
export async function loader() {
  // get the currently logged in user
  const user = await userServices.getCurrentUser();
  // return the user
  return { user };
}
function Profile() {
  const navigate = useNavigate();
  const { user } = useLoaderData();
  const [formData, setFormData] = useState({
    name: user.data.user.name,
    location: user.data.user.location,
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const location = e.target[1].value;

    console.log(name, location);
    // send the details to the API
    userServices
      .updateUser(name, location)
      .then((response) => {
        alert("Updated successfully");
        setFormData(response.data);
        // if the updation is successful, redirect to the dashboard page
        setTimeout(() => {
          navigate("/dashboard/profile");
        }, 500);
      })
      .catch((error) => {
        // if there is an error, log the error to the console
        alert("Admin only can update user profile");
      });
  };

  const handleDelete = () => {
    userServices.deleteUser().then((response) => {
      alert("Deleted successfully");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <input className="mt-2" type="text" placeholder={formData.name} />
        </div>
        <div>
          <input  className="mt-2" type="text" placeholder={formData.location} />
        </div>
        <button className="btn btn-warning btn-sm mt-2 w-25">Edit</button>
      </form>
      <button onClick={handleDelete} className="btn btn-danger btn-sm mt-2 w-25">
        Delete
      </button>
    </div>
  );
}

export default Profile;
