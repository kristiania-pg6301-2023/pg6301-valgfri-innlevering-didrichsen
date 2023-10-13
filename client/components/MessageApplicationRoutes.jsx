import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import SnapBoard from "./SnapBoard";

function MessageApplicationRoutes () {

    const message = [{
        message:"Hei på på deg.",
        username:"SIMRIK"
    }]

    return (
        <Routes>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/signup"} element={<SignUp/>} />
            <Route path={"/messageboard"} element={<SnapBoard messages={message}/>} />
        </Routes>
    )

}

export default MessageApplicationRoutes;