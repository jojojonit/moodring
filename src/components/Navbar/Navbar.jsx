import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">home</NavLink>/<NavLink to="/entries">entries</NavLink>/
        <NavLink to="/journal">journal</NavLink>
      </nav>
    </>
  );
}
