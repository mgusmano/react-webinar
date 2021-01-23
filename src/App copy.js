import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Title, Footer, Page, Row, FieldGroup, Label, SubmitButton} from "./Forms";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';import { Autocomplete, ToggleButtonGroup } from 'formik-material-ui-lab';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const App = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    toggle: null,
    autocomplete: null,
    // date: new Date(),
    // time: new Date(),
    // dateTime: new Date(),
  }
  const validate = values => {
    const errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
  }
  const onSubmit = (values, { setSubmitting }) => {

    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500)

  }
  return (
    <Page>
      <Title>React Form in Ext JS</Title>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <div style={{height:'4px'}}>
              {isSubmitting && <LinearProgress />}
            </div>

            {/* <Row>
              <FieldGroup>
                <Label htmlFor="firstname">First Name:</Label>
                <Field type="text" name="firstname" />
                <ErrorMessage style={{color:'red',fontSize:'11px'}} name="firstname" component="div" />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="lastname">Last Name:</Label>
                <Field type="text" name="lastname" />
                <ErrorMessage style={{color:'red',fontSize:'11px'}} name="lastname" component="div" />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="email">Email:</Label>
                <Field type="email" name="email" />
                <ErrorMessage style={{color:'red',fontSize:'11px'}} name="email" component="div" />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="password">Password:</Label>
                <Field type="password" name="password" />
                <ErrorMessage style={{color:'red',fontSize:'11px'}} name="password" component="div" />
              </FieldGroup>
            </Row> */}

            <Row>
              This a very simple React View
            </Row>

            <Row>
              <Field style={{width:'400px'}} component={TextField} name="firstname" type="firstname" label="First Name"/>
            </Row>

            <Row>
              <Field style={{width:'400px'}} component={TextField} name="lastname" type="lastname" label="Last Name"/>
            </Row>

            <Row>
              <Field style={{width:'400px'}} component={TextField} name="email" type="email" label="Email"/>
            </Row>

            <Row>
              <Field component={TextField} name="firstname" type="firstname" label="First Name"/>
              <Field component={TextField} name="lastname" type="lastname" label="Last Name"/>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>



              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />


            </Row>


            <Box margin={1}>
              <Field
                component={ToggleButtonGroup}
                name="toggle"
                type="checkbox"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </Field>
            </Box>

            {/* <Box margin={1}>
              <Field
                name="autocomplete"
                component={Autocomplete}
                options={top100Films}
                getOptionLabel={(option: Movie) => option.title}
                style={{ width: 300 }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <TextField
                    {...params}
                    error={touched['autocomplete'] && !!errors['autocomplete']}
                    helperText={
                      touched['autocomplete'] && errors['autocomplete']
                    }
                    label="Autocomplete"
                    variant="outlined"
                  />
                )}
              />
            </Box> */}

  {/*
           <Field component={TimePicker} name="time" label="Time" />
            <br />

            <Field component={DatePicker} name="date" label="Date" />
            <br />
            <Field
              component={DateTimePicker}
              name="dateTime"
              label="Date Time"
            /> */}


            <Footer style={{background:'green',justifyContent:'flex-end'}}>
              {/* <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton> */}



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
      {/* </MuiPickersUtilsProvider> */}
    </Page>
  )
}

export default App;