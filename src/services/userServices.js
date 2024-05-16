import { instance, protectedInstance } from "./instance";

// define the user services
const userServices = {
  // define the login method
  login: async (email, password) => {
    // make a POST request to the login endpoint
    return instance.post(
      "/users/login",
      {
        username: email,
        password: password,
      },
      { withCredentials: true }
    );
  },
  forgotpassword: async (email) => {
    try {
      // const response = await axios.post(`${BASE_URL}/auth/forgotpassword`, { email });
      // return response.data; // Return the response from the backend
      return instance.post("/users/forgotpassword", {
        username: email,
      });
    } catch (error) {
      console.error("Error:", error);
      throw error; // Throw error for handling in components
    }
  },
  resetPassword: async (token, password) => {
    try {
      return instance.post("/users/resetpassword/"+token, {password});
    } catch (error) {
      console.error("Error:", error);
      throw error; // Throw error for handling in components
    }
  },
  // define the register method
  register: async (name, email, password, location) => {
    // make a POST request to the register endpoint
    return instance.post("/users/register", {
      name: name,
      username: email,
      password: password,
      location: location,
    });
  },
  // define the logout method
  logout: async () => {
    // make a POST request to the logout endpoint
    return protectedInstance.get("/users/logout");
  },
  // define the getCurrentUser method
  getCurrentUser: async () => {
    // make a GET request to the current user endpoint
    return protectedInstance.get("/users/profile");
  },
  updateUser: async (name, location) => {
    return protectedInstance.put("/users/profile", {
      name: name,
      location: location,
    });
  },
  deleteUser: async () => {
    return protectedInstance.delete("/users/profile");
  },
};

export default userServices;
