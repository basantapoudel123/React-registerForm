import { useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'

function App() {
  const [values, setValues] = useState({
    username:"",
    email: "",
    number: "",
    password: "",
    confirmpassword:""
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder: "Username",
      errorMessage: "Username should be of 3-16 character without any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder: "Email",
      errorMessage: "Email should be Valid!!",
      label: "Email",
      required: true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder: "Password",
      errorMessage: "Password should be of more than 4 characters",
      label: "Password",
      pattern: "^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z0-9\d!@#$%^&*()_+]{7,19}$",
      required: true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder: "Confirm Password",
      errorMessage: "Confirmation password should be same as previous password",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]
  
  const hanldeSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
  }

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <div className="App">
      <form onSubmit={hanldeSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} 
                     value={values[input.name]} 
                     onChange={handleChange}/>
        ))}
        
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
