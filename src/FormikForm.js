import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { Page, Title, Row, Footer} from "./StyledComponents";
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';

const FormikForm = () => {
  const [result, setResult] = React.useState("");

  const initialValues = {
    firstname: '',
    lastname: '',
    email: ''
  }
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Mininum 2 characters")
      .max(15, "Maximum 15 characters")
      .required("First Name is required!"),
    lastname: Yup.string()
      .min(2, "Mininum 2 characters")
      .max(15, "Maximum 15 characters")
      .required("Last Name is required!"),
    email: Yup.string()
      .email('Email is not valid!')
      .required('Email is required!')
  })

  const onSubmit = (values) => {
    setResult('form is submitted: ' + JSON.stringify(values))
  }

  return (
    <Page>
      <Title>Formik Form</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Row>
              <Field style={{height:'70px',width:'60%'}}
                component={TextField}
                name="firstname"
                type="firstname"
                label="First Name"
              />
            </Row>
            <Row>
              <Field style={{height:'70px',width:'60%'}}
                component={TextField}
                name="lastname"
                type="lastname"
                label="Last Name"
              />
            </Row>
            <Row>
              <Field style={{height:'70px',width:'60%'}}
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
            </Row>
            <Footer style={{background:'white',justifyContent:'flex-end'}}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Footer>
            <Row>
              {result}
            </Row>
          </Form>
        )}
      </Formik>
    </Page>
  )
}

export default FormikForm;
