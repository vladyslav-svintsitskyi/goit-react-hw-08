import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Navigation />
      </div>
      {isLoggedIn ? (
        <div className="flex-none">
          <UserMenu />
        </div>
      ) : (
        <AuthNav />
      )}
    </div>
  );
};

export default AppBar;
