import { Link } from "react-router-dom";

const Navbar = ({ role }) => (
  <nav className="bg-blue-600 p-4 shadow-lg text-white">
    <ul className="flex space-x-4">
      <li>
        <Link className="hover:text-blue-200" to="/">
          home
        </Link>
      </li>
      {role === "chief" && (
        <>
          <li>
            <Link className="hover:text-blue-200" to="/chief-dashboard">
              Chief Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-200" to="/chief-management">
              Shift Management
            </Link>
          </li>
        </>
      )}
      {role === "nurse" && (
        <>
          <li>
            <Link className="hover:text-blue-200" to="/nurse-dashboard">
              My Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-200" to="/schedule">
              My Shifts
            </Link>
          </li>
        </>
      )}
      <li>
        <Link className="hover:text-blue-200" to="/login">
          Log out
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
