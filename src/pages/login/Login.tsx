import React from 'react';
import { Form, Input, Button } from 'antd';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import UserLogin from '../../types/UserLogin';
import { useAppDispatch } from '../../hooks/reduxHook';
import { handleLogin } from '../../redux/authSlice';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();

    const initialFormValues: UserLogin = {
        username: '',
        password: '',
    };

    const formValidationSchema = Yup.object().shape({
        username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
        password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    });

  const handleSubmit = (formValues: UserLogin, { setSubmitting }: any) => {
    // Submit the form data to the server or API
    console.log(formValues);
    dispatch(handleLogin(formValues));
    setSubmitting(false);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <FormikForm>
            <Form.Item
              label="Username"
              validateStatus={touched.username && errors.username ? 'error' : 'success'}
              help={touched.username && errors.username}
            >
              <Input name="username" />
            </Form.Item>
            <Form.Item
              label="Password"
              validateStatus={touched.password && errors.password ? 'error' : 'success'}
              help={touched.password && errors.password}
            >
              <Input type="password" name="password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Login
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Login;