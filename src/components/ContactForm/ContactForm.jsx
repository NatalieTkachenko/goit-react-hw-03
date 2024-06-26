// === Lib modules ===
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// === Styles ===
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const NameFieldId = useId();
  const NumberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Please enter at least 3 characters").required(),
    number: Yup.string().max(50, "Please enter no more than 50 characters").required(),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
    onAddContact(values);
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.formContainer}>
        <label className={styles.labeltitle} htmlFor={NameFieldId}>
          Name
        </label>
        <Field
          className={styles.inputfield}
          type="text"
          name="name"
          id={NameFieldId}
        ></Field>
        <ErrorMessage className={styles.error} name="name" component ="div" />
        <label className={styles.labeltitle} htmlFor={NumberFieldId}>
          Number
        </label>

        <Field
          className={styles.inputfield}
          type="text"
          name="number"
          id={NumberFieldId}
        ></Field>
        <ErrorMessage className={styles.error} name="number" component ="div" />

        <button type="Submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
