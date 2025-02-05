import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(50),
    number: Yup.string().required().min(3).max(50),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="text" name="number" />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
