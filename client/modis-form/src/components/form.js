import React,{ useState } from 'react'
import axios from "axios"
import './form.css';

const Form = ()=> {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [submitBtnStatus,setSubmitBtnStatus] = useState(true)
    const [color,setColor] = useState('')
    const [formStatus , setformStatus] = useState('')

    const inputsStyle ={
        border: `2px solid ${color}`,
    }

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    const setBorderColor = ()=>{
       setColor(randomColor())
    }

    const randomColor = ()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
    }


    const handleSubmit = async (event) => {
      event.preventDefault();

      await axios.post('http://localhost:3000/user',user).then(res =>{
        console.log(res)
        setSubmitBtnStatus(true)
    }).catch(err=>{
        setSubmitBtnStatus(false)
        console.log(err)
      })

    }
    

  
    return (
            <div className="container">
            <div className="row justify-content-md-center align-items-center form-box-row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" onBlur={setBorderColor} style={inputsStyle} onChange={e => setFirstName(e.target.value)} style={{border: `2px solid ${color}`}} className="form-control input-field" id="firstName" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text"  onBlur={setBorderColor} style={inputsStyle} onBlur={setBorderColor}  onChange={e => setLastName(e.target.value)} className="form-control input-field" id="lastName" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email"  onBlur={setBorderColor} style={inputsStyle} onChange={e => setEmail(e.target.value)} className="form-control input-field" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                        <button type="submit" className={`btn btn-${submitBtnStatus?"primary":"danger"}`}>Submit</button>
                      </form>
                </div>
            </div>
            </div>
    );
    

}


export default Form;
