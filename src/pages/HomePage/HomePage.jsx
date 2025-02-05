import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Store all your contacts in one place – easy, secure, and accessible!
            Your personal contact book – quick access to important people.
            Organize contacts, manage connections, and stay in touch!
          </p>
          {isLoggedIn ? (
            <Link className="btn btn-primary" to="/contacts">
              Get Started
            </Link>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
