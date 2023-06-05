import React, { useState } from "react";
import './Login.css';
import amazon from '../../Asserts/amazon_white.png';


export default function Login({ Navigation }) {
    //the initial state of all errors are declared as false
    const initialError = {
        email: { required: false },
        password: { required: false },
    };

    const [error, setError] = useState(initialError);
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = initialError;     //It is used to change the value after submitting i.e It will change the errors to its initial state
        let hasherror = false           //It will define overall error 

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


    return <div className="logg">
        <img src={amazon} alt='signinimg' className="loginimg" />
        <div className="Loginbox">
            <form onSubmit={handleSubmit}>
                <div className="login">
                    <center><h1 style={{ color: 'black' }}>Login</h1></center>
                    <div>
                        <h4 style={{ color: 'black' }}>E-Mail</h4>
                        <input type='text' className="signinput" name="email" placeholder="Enter E-Mail Id..." onChange={handleInput} />
                        {error.email.required ?
                            (<span style={{ color: "red" }}>E-mailId is required!</span>) : null
                        }
                    </div>
                    <div>
                        <h4 style={{ color: 'black' }}>Password</h4>
                        <input type='Password' className="signinput" name="password" placeholder="************" onChange={handleInput} />
                        {error.password.required ?
                            (<span style={{ color: "red" }}>Password is required!</span>) : null
                        }
                    </div>
                    <button className="signinbutton" type="submit" onClick={()=>setShow(true)}>Login</button>
                    
                </div>
                 
            </form>
            <center style={{ paddingBlock: "5px" }}>
                <h4>Create new Account?Please <button onClick={() => { Navigation('/Signin') }}><span style={{ color: 'blue' }}> Register</span></button> </h4>
            </center>
        </div>
    </div >
}