import {Link, useNavigate} from "react-router-dom";
import React, {useMemo, useState} from "react";

function SignUp () {

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword,setConfirmedPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    const passwordsMismatch = useMemo(() => {
        return confirmedPassword.length > 0 && password !== confirmedPassword;
    }, [password, confirmedPassword])

    async function handleSignUp() {

        const navigate = useNavigate();

        try{
            const response = await fetch("/api/signup", {
                method:"POST",
                body: JSON.stringify({username,password,confirmedPassword}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(response.ok) {
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
                    <input type="text" name="username" onChange={(e)=> setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <label>
                    Confirm Password:{passwordsMismatch && "!!!!"}
                    <input type="password" name="confirmPassword" onChange={(e) => setConfirmedPassword(e.target.value)}
                    style={!passwordsMismatch ? {} : {border: "1px solid red"}}/>
                </label>
                <div>

                        <button onClick={handleSignUp} disabled={passwordsMismatch}>Sign up</button>

                </div>
            </form>
        </div>
    );
}

export default SignUp;