/** @format */

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function MyForm() {
  return (
    <>
      <Formik
        initialValues={{ firstName: '', email: '', message: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Bu nasil isim boyle, biraz kisa yaz(max15)')
            .required('isimsiz olmaz, doldur burayi'),
          email: Yup.string().required('mail lazim').email('adam gibi mail gir'),
          message: Yup.string().required('en azindan biraz bir seyler yaz'),
        })}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          //make async call
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate className="form">
            <Field name="firstName" placeholder="first name" className="input" />
            <ErrorMessage name="firstName" className="error" component="div" />
            <Field
              name="email"
              placeholder="email"
              className="email"
              type="email"
              className="input"
            />
            <ErrorMessage name="email" className="error" component="div" />
            <Field
              as="textarea"
              name="message"
              placeholder="message"
              className="email"
              type="email"
              className="input"
            />
            <ErrorMessage name="message" className="error" component="div" />
            <button disabled={isSubmitting} type="submit" className="btn">
              submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default MyForm;
