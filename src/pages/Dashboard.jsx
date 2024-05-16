import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <center>
        <div>
          <div>
            <nav>
              <ul className="list-unstyled text-center d-inline">
                <li>
                  <Link
                    to="/dashboard/profile"
                    style={{ textDecoration: "none" }}
                  >
                    User Profile
                  </Link>
                </li>
               
              </ul>
            </nav>
          </div>

          <div style={{ marginLeft: "50px" }}>
            <Outlet />
          </div>
        </div>
      </center>
    </div>
  );
};

export default Dashboard;
