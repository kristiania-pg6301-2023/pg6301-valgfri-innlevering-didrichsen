import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function MessageApplicationRoutes () {

    return (
        <Routes>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/signup"} element={<SignUp/>} />
        </Routes>
    )

}

export default MessageApplicationRoutes;