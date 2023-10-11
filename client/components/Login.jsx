import React from "react";
import { Link } from "react-router-dom";

function Login() {

    function handleLogin() {
        console.log("Test");
    }

    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <div>
                    <button type="button" onClick={handleLogin}>
                        Sign in
                    </button>
                    <Link to="/signup">
                        <button>Sign up</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
