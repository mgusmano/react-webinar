import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { Page, Title, Row, Footer} from "./Forms";
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import SenchaGrid, { Column } from '@sencha/sencha-grid';
import '@sencha/sencha-grid/dist/themes/material.css';
import 'material-design-icons/iconfont/material-icons.css';
import axios from 'axios';

const App = () => {
  const gridRef = useRef(null)
  const [ data, setData ] = useState([])
  const [ selected, setSelected ] = useState(null)
  const url = 'http://localhost:3055/users'

  useEffect(() => {
    axios({
      url: url + '?id_ne=1'
    })
    .then(response => {
      console.log('useEffect',response)
      setData(response.data)
    })
  },[]);

  const onFilter = () => {
    var filter = {
      property: 'firstname',
      value: 'Joe'
    };
    var filters = [filter];
    gridRef.current.setFilters(filters);
  }

  const onSelect = ({selected}) => {
    setSelected(selected[0])
  }

  const onDelete = () => {
    axios({
      url: url + '/' + selected.id,
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      axios({
        url: url + '?id_ne=1'
      })
      .then(response => {
        setSelected(null)
      })
    })
  }

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

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    axios({
      url: url,
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: values
    }).then(response => {
      axios({
        url: url + '?id_ne=1',
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        resetForm({})
        setSubmitting(false);
        setData(response.data)
      })
    }, error => {
      console.log(error);
    });
  }

  return (
    <Page>
      <Title>React Form</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <div style={{height:'4px'}}>
              {isSubmitting && <LinearProgress />}
            </div>
            <Row style={{fontSize:'16px'}}>
              Enter your information and click 'Submit'
            </Row>
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
            <Row style={{fontSize:'24px'}}>
              <div style={{marginTop:'30px',borderBottom:'0px solid red'}}>
                Sencha Grid for React UI (GRUI) - coming soon!
              </div>
            </Row>
            <Row>
              <SenchaGrid
                onSelect={onSelect}
                plugins={{
                  gridfilters: true
                }}
                ref={gridRef}
                style={{width:'500px',height:'200px'}}
                data={data}
              >
                <Column dataIndex="id" text="ID" width="50px" />
                <Column dataIndex="firstname" text="First Name" />
                <Column dataIndex="lastname" text="Last Name" />
                <Column dataIndex="email" text="Email" width="200px" />
              </SenchaGrid>
            </Row>
            <Row>
                <Button onClick={onFilter}>Filter First Name of 'Joe' (call setFilters method)</Button>
            </Row>
            <Row>
                {selected != null &&
                <Button onClick={onDelete}>Delete Selected Row - ID: {selected.id}</Button>
                }
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
          </Form>
        )}
      </Formik>
    </Page>
  )
}

export default App;
