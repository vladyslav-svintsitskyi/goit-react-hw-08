import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegisterForm = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));

    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold">Sign up</h3>
                <p className="py-6">
                  You already have account?{" "}
                  <Link className="link link-hover text-teal-500" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <div className="fieldset">
                    <label>
                      <span className="fieldset-label">Name:</span>
                      <Field className="input" name="name" />
                    </label>
                    <label>
                      <span className="fieldset-label">Email:</span>
                      <Field className="input" name="email" />
                    </label>
                    <label>
                      <span className="fieldset-label">Password:</span>
                      <Field
                        className="input"
                        name="password"
                        type="password"
                      />
                    </label>
                    <button className="btn btn-neutral mt-4" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
