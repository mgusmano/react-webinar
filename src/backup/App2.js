import React from 'react';

import { FieldFormik, Page, Row, FieldEnd, SubmitButton } from "./Forms";

import { Formik, Form, Field, ErrorMessage } from 'formik';

const register = {}
const errors = {}

function App() {
  return (
    <div style={{height:'100%',xdisplay:'flex',justifyContent:'space-evenly',border:'1px solid red'}}>

<div style={{height:'100px'}}>top</div>

        {/* <FieldFormik
          type='email'
          required={true}
          name={'Email'}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        /> */}

<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>






        <Row>
          <Field refval={register} errors={errors} required={true} name='First Name'></Field>
          <Field refval={register} errors={errors} required={true} name='Last Name'></Field>
        </Row>

        <Row>
          <Field refval={register} errors={errors} required={true} name='City'></Field>
          <Field refval={register} errors={errors} required={true} name='State'></Field>
          <Field refval={register} errors={errors} required={true} name='Zip'></Field>
        </Row>


      <Row>
        <div style={{border:'1px solid green'}}>1</div>
        <div style={{border:'1px solid green'}}>2</div>
      </Row>

      <div style={{display:'flex',justifyContent:'space-evenly',padding:'10px',border:'1px solid blue'}}>
        <div style={{border:'1px solid green'}}>1</div>
        <div style={{border:'1px solid green'}}>2</div>
        <div style={{border:'1px solid green'}}>3</div>
      </div>

    </div>
  );
}

export default App;
