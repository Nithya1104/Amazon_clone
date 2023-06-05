import React, { useState } from "react";
import './Signin.css';
import amazonimg from '../../Asserts/amazon_white.png';


export default function Signin({ Navigation }) {

    //the initial state of all errors are declared as false
    const initialError = {
        name: { required: false},
        email: { required: false },
        password: { required: false },
    };

    const [error, setError] = useState(initialError);



    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = initialError;     //It is used to change the value after submitting i.e It will change the errors to its initial state
        let hasherror = false           //It will define overall error 
        if (input.name === "") {
            errors.name.required = true;
            hasherror = true;
        }
        if (input.email === "") {
            errors.email.required = true;
            hasherror = true;
        }
        if (input.password === "") {
            errors.password.required = true;
            hasherror = true;
        }
        if (!hasherror) {
            const payload = input;

            try {
                console.log("mkmkmk")
                await fetch('http://localhost:5000/user', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: { 'Content-type': 'application/json' }
                });
            } catch (err) {
                console.log(err);
            }
        }

        setError(errors);
    };

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    //[e.target.name]--->name is the html input elements name



    return (<div className="sign">
        <div className="signin">
            <img src={amazonimg} alt='signinimg' className="loginimg"  />
            <div className="signbox">
                <form onSubmit={handleSubmit}>
                    <center><h1 style={{ color: 'black' }}>Create Account</h1></center>
                    <div className="sign_text">
                        <h4 style={{ color: 'black' }}>Username</h4>
                        <input type='text' name="name" className="signinput" placeholder="Enter Username..." onChange={handleInput} />
                        {error.name.required ?
                            (<p style={{ color: "red" }}>Name is required!</p>) : null
                        }
                    </div>
                    <div className="sign_text">
                        <h4 style={{ color: 'black' }}>E-Mail</h4>
                        <input type='email' name="email" className="signinput" placeholder="Enter E-Mail Id..." onChange={handleInput} />
                        {error.email.required ?
                            (<span style={{ color: "red" }}>E-mailId is required!</span>) : null
                        }
                    </div>
                    <div className="sign_text">
                        <h4 style={{ color: 'black' }}>Password</h4>
                        <input type='Password' name="password" className="signinput" placeholder="********" onChange={handleInput} />
                        {error.password.required ?
                            (<span style={{ color: "red" }}>Password is required!</span>) : null
                        }
                    </div><br/>
                    <div>
                        <button  type="submit" className="signinbutton">Create your Amazon account</button><br/>
                        <p style={{ color: 'black', width: '365px' }}>By creating an account or logging in, you agree to Amazon’s <span style={{ color: 'blue' }}>Conditions of Use</span> and <span style={{ color: 'blue' }}>Privacy Policy</span>.</p>
                    </div>
                </form>
            </div>

            <div className="log">
                <div className="already_login">
                    <h3 className="log_text">Already Have an account?Login</h3><br></br>
                    <button onClick={() => { Navigation('/Login') }} className="login_btn">Login</button>
                </div>
            </div>
        </div>
    </div >
    )
}