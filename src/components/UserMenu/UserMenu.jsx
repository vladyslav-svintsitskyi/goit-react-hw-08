import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  return (
    isLoggedIn && (
      <div className="flex gap-4 items-center">
        <h2>Welcome, {user.name}</h2>
        <button className="btn btn-outline btn-xs" onClick={handleLogout}>
          Logout
        </button>
      </div>
    )
  );
};

export default UserMenu;
