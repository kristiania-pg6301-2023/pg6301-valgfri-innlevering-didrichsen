import {Link} from "react-router-dom";
import MessageApplicationRoutes from "./MessageApplicationRoutes";

function MessageApplication (){

    return (
    <>
        <header>
            <h1>Message Board</h1>
        </header>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/messageboard"}>MessageBoard</Link>
            <div style={{flex: 1}}></div>
            <Link to={"/login"}>Login</Link>
        </nav>
        <main>
            <MessageApplicationRoutes/>
        </main>
        <footer>By Arian and Simen</footer>

    </>
    );
}

export default MessageApplication;