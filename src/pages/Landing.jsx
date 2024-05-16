import { Outlet } from "react-router-dom";
function Landing() {
 
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="text-primary">welcome</h3>
      
      <Outlet />
    </div>
  )
}
export default Landing;
