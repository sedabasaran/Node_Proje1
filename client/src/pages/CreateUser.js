import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";


function CreateUser() {
  let history = useHistory();
  const initialValues = {
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    description: "",
    imgUrl:"",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3,'Too Short!').max(15,'Too Long!').required(),
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    birthDate: Yup.date().required(),
    description: Yup.string().min(3,'Too Short!').max(50,'Too Long!').required(),
    imgUrl:Yup.string().required(),
  });
 
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/users", data).then((response) => {
      history.push("/");
    });
  };
  
  return (
    <div className="createUserPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>userName: </label>
          <ErrorMessage name="userName" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="userName"
            placeholder="(Lütfen Kullanıcı Adınızı Giriniz. userName...)"
          />
          <label>email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="email"
            placeholder="(Lütfen Email Adresinizi Giriniz. email...)"
          />
          <label>firstName: </label>
          <ErrorMessage name="firstName" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="firstName"
            placeholder="(Lütfen Adınızı Giriniz. firstName...)"
          />
          <label>lastName: </label>
          <ErrorMessage name="lastName" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="lastName"
            placeholder="(Lütfen Soyadınızı Giriniz. lastName...)"
          />
          <label>birthDate: </label>
          <ErrorMessage name="birthDate" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="birthDate"
            placeholder="(Yıl.Ay.Gün Formatında Yazınız.Örn: 2021.05.04)"
          />
          <label>description: </label>
          <ErrorMessage name="description" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="description"
            placeholder="(Buraya Bir Açıklama Giriniz. description...)"
          />
          <label>imgUrl: </label>
          <ErrorMessage name="imgUrl" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="imgUrl"
            placeholder="(Lütfen Resim Url Giriniz. imgUrl...)"
          />
          <button type="submit"> Create User</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateUser;

