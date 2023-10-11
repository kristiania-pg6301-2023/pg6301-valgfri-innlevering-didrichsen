import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import MessageBoard from "./MessageBoard";

function MessageApplicationRoutes () {

    return (
        <Routes>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/signup"} element={<SignUp/>} />
            <Route path={"/messageboard"} element={<MessageBoard/>} />
        </Routes>
    )

}

export default MessageApplicationRoutes;