import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    function handleLogin() {


    }

    return (
        <div>
            <form>
                <label>
                    Username:
                    <div>
                    <input type="text" name="username" />
                    </div>
                </label>
                <label>
                    Password:
                    <div>
                    <input type="password" name="password" />
                    </div>
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
