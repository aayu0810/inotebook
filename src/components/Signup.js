import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = (props) => {
    const [credentials,setCredentials] = useState({name:"",email:"" , password:"", cpassword:""})

    let navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const{name,email,password}= credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
           
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              
            },
            body: JSON.stringify({name,email,password})
        
        });

        const json = await response.json()
        console.log(json);
        if (json.success){
            //Save the auth  token and redirect
            localStorage.setItem('token',json.authtoken);
           navigate("/");
           props.showAlert ("Account created successfully","success");
        }
        else{
            props.showAlert ("Credentials not correct","error");
        }

    }
        const onChange =(e) => {
           
            setCredentials ({...credentials,[e.target.name]: e.target.value})
      
      
        }
          

  return (
    <div>
       <form onSubmit={handleSubmit}>
  <div className="container ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="container mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">ConfirmPassword</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword"onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Signup
