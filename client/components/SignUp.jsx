import {Link, useNavigate} from "react-router-dom";
import React, {useMemo, useState} from "react";

function SignUp () {

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword,setConfirmedPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    const navigate = useNavigate();

    const passwordsMismatch = useMemo(() => {
        return confirmedPassword.length > 0 && password !== confirmedPassword;
    }, [password, confirmedPassword])

    async function handleSignUp(e) {
        e.preventDefault();

        try{
            const response = await fetch("/api/authentication/signup", {
                method:"POST",
                body: JSON.stringify({username,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(response.ok) {
                const data = await response.json();
                console.log(data.message)
                navigate("/login");

            }
            setErrorMessage(response.message);
        } catch (error){
            console.error("Error signing up", error)
            setErrorMessage(error.message)
        }
    }

    return (
        <div>
            {errorMessage?<div>Error signing up. Try again.</div>:null}
            <form>
                <label>
                    Username:
                    <div>
                    <input className="input" type="text" name="username" onChange={(e)=> setUsername(e.target.value)}/>
                    </div>
                </label>
                <label>
                    Password:
                    <div>
                    <input className="input" type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    </label>
                <label>
                    Confirm Password:{passwordsMismatch && "!!!!"}
                    <div>
                    <input type="password" name="confirmPassword" onChange={(e) => setConfirmedPassword(e.target.value)}
                    style={!passwordsMismatch ? {} : {border: "1px solid red"}}/>
                    </div>
                    </label>
                <div>

                        <button onClick={(e)=>handleSignUp(e)} disabled={passwordsMismatch}>Sign up</button>

                </div>
            </form>
        </div>
    );
}

export default SignUp;