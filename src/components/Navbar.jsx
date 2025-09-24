import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Travel Agency
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-vertical lg:menu-horizontal px-1">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/destinations" className="hover:underline">
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
