import styled from "styled-components";

export function Description(props) {

  return (
    <div  style={{display:'flex',flexDirection:'row'}}>
      <div>
    react features used:<br/><br/>
    - function component<br/>
    - useState<br/>
    - useEffect<br/>
    - useRef<br/>
    - conditional JSX<br/>
    <br/>
      </div>
      <div style={{marginLeft:'40px'}}>
    npm packages used:<br/><br/>
    - @material-ui/core<br/>
    - @sencha/sencha-grid<br/>
    - axios<br/>
    - formik<br/>
    - formik-material-ui<br/>
    - styled-components<br/>
    - yup<br/>
      </div>
    </div>
  )
}

export const Title = styled.div`
  color: white;
  font-size: 32px;
  background: var(--base-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  bottom: 0;
`;

export const Footer = styled.div`
background: lightgray;
position: absolute;
right: 0;
bottom: 0;
margin: 30px;
`;

export const Horizontal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100vh;
  border: 1px solid red;
`;

export const Vertical = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;

export const Splitter = styled.div`
cursor: col-resize;
background-color: #aaa;
background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='30'><path d='M2 0 v30 M5 0 v30 M8 0 v30' fill='none' stroke='black'/></svg>");
background-repeat: no-repeat;
background-position: center;
width: 10px;
height: 100%;

/* Prevent the browser's built-in drag from interfering */
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;




export const Child = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid green;
`;




export function FieldFormik(props) {
  // const errors = props.errors
  // //const refval = props.refval({ required: props.required })
  // const refval = props.refval
  const upperName = props.name
  const lowerName = props.name.toLowerCase().replace(/\s/g, '')
  // const placeholder = `Type ${upperName} here`
  return (
    <>
          <Label htmlFor={lowerName}>{upperName}:{props.required && <Required>*</Required>}</Label>

    <input
      type={props.type}
      name={lowerName}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.email}
    />
    <Message>{props.errors[lowerName] && props.touched[lowerName] && props.errors[lowerName]}</Message>
    </>
  )
}



export function Field(props) {
  const errors = props.errors
  //const refval = props.refval({ required: props.required })
  const refval = props.refval
  const upperName = props.name
  const lowerName = props.name.toLowerCase().replace(/\s/g, '')
  const placeholder = `Type ${upperName} here`
  return (
    <FieldGroup>
      <Label htmlFor={lowerName}>{upperName}:{props.required && <Required>*</Required>}</Label>
      <Input ref={refval} placeholder={placeholder} name={lowerName} id={lowerName}></Input>
      <Message>{errors[lowerName] && <span>This field is required</span>}</Message>
    </FieldGroup>
  )
}

export function FieldEnd(props) {
  const errors = props.errors
  const refval = props.refval({ required: props.required })
  const upperName = props.name
  const lowerName = props.name.toLowerCase().replace(/\s/g, '')
  const placeholder = `Type ${upperName} here`
  return (
    <FieldGroupEnd>
      <Label htmlFor={lowerName}>{upperName}:{props.required && <Required>*</Required>}</Label>
      <Input ref={refval} placeholder={placeholder} name={lowerName} id={lowerName}></Input>
      <Message>{errors[lowerName] && <span>This field is required</span>}</Message>
    </FieldGroupEnd>
  )
}


// export const Button = styled.button`
//   padding: 20px;
//   background-color: black;
//   font-size: 32px;
//   color: white;
// `;

// export const FormGroup = styled.div`
// 	color: palevioletred;
//   display: block;
// 	width: 300px;
// 	margin: 50px auto;
// `;

export const Page = styled.div`
  height:100%;
  justify-content:space-evenly;
  border:1px solid lightgray;
`;

export const FieldGroup = styled.div`
xflex:1;
xdisplay:flex;
xjustify-content:space-evenly;
xpadding:0 0 0 0;
`;

export const FieldGroupEnd = styled.div`
flex:1;
padding:0 20px 0 0;
`;


export const Row = styled.div`
  display:flex;
  flex-direction:row;
  xpadding: 0 0 0 10px;

  justify-content:space-evenly;
  padding:10px;
  border-bottom:0px solid lightgray;
`;


export const SubmitButton = styled.button`
  background: var(--base-color);
  font-size: 16px;
  color: white;
  width: 120px;
  height:50px;
  xborder-radius: 22px;
  xbackground-image: linear-gradient(to right, rgb(22 149 156), rgb(8 87 91));
`;



export const Label = styled.label`
	margin-bottom: 0.0em;
  color: black;
  font-family: Arial;
  font-size: 12px;
  display: block;
`;

export const Required = styled.span`
  font-size: 18px;
  color: red;
`;

export const Input = styled.input`
	padding: 10px 10px 10px 10px;
	color: black;
	background: white;
	border: 1px solid lightgray;
	border-radius: 3px;
	width: 100%;
  xmargin: 10px 10px 10px 10px;
  xmargin: 0 10px 0 0;
`;

export const Message = styled.label`
  height: 14px;
	xmargin-bottom: 0.0em;
	color: palevioletred;
  display: block;
  font-family: Arial;
  font-size: 12px;
`;
