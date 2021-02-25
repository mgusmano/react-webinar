import React from 'react';

function RawForm() {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [result, setResult] = React.useState("");

  function handleSubmit(event) {
    if (error == null) {
      if (firstname === '' || lastname === '' || email === '') {
        setResult('there is at least 1 blank field, not submitted')
      }
      else {
        setResult('form is submitted: ' + firstname + ' ' + lastname + ' ' + email)
      }
    }
    else {
      setResult('there is an error, not submitted')
    }
    event.preventDefault();
  }

  function handleChangeFirstName(event) {
    setResult('')
    const value = event.target.value;
    if (value.includes("$")) {
      setError("You cannot use a $ in First Name");
    } else {
      setError(null);
      setFirstName(value);
    }
  }

  function handleBlurFirstName(event) {
    setResult('')
    const value = event.target.value;
    console.log('value',value)
    if (value === '') {
      setError("First Name cannot be blank");
      setResult('')
    }
    else {
      setError(null);
      setFirstName(value);
    }
  }

  function handleChangeLastName(event) {
    setResult('')
    const value = event.target.value;
    if (value.includes("#")) {
      setError("You cannot use a # in Last Name");
    } else {
      setError(null);
      setLastName(value);
    }
  }

  function handleBlurLastName(event) {
    setResult('')
    const value = event.target.value;
    console.log('value',value)
    if (value === '') {
      setError("Last Name cannot be blank");
    }
    else {
      setError(null);
      setLastName(value);
    }
  }

  function handleChangeEmail(event) {
    setResult('')
    const value = event.target.value;
    if (value.includes("_")) {
      setError("You cannot use an underscore in Email");
    } else {
      setError(null);
      setEmail(value);
    }
  }

  function handleBlurEmail(event) {
    const value = event.target.value;
    console.log('value',value)
    if (value === '') {
      setError("Email cannot be blank");
    }
    else {
      setError(null);
      setEmail(value);
    }
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        <div>
          <div style={{width:'100px'}}>First Name:</div>
          <input type="text"
            id="firstname"
            name="firstname"
            onChange={handleChangeFirstName}
            onBlur={handleBlurFirstName}
            value={firstname}
          />
        </div>
        <div>
          <div style={{width:'100px'}}>Last Name:</div>
          <input type="text"
            id="lastname"
            name="lastname"
            onChange={handleChangeLastName}
            onBlur={handleBlurLastName}
            value={lastname}
          />
        </div>
        <div>
          <div style={{width:'100px'}}>Email:</div>
          <input type="text"
            id="email"
            name="Email"
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            value={email}
          />
        </div>
        {error && (
          <>
          <br></br>
          <label style={{ color: "red" }}>
            {error}
          </label>
          </>
        )}
        <br></br><br></br>
        <button type="submit">Submit</button>
        {result && (
          <>
          <br></br><br></br>
          <label style={{ color: "blue" }}>
            {result}
          </label>
          </>
        )}
      </form>
    </>
  );
}

export default RawForm;