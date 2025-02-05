import { NavLink } from "react-router-dom";

// kiria@gak.com

const AuthNav = () => {
  return (
    <nav className="flex gap-4 font-bold">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </nav>
  );
};

export default AuthNav;
