import {Link} from "react-router-dom";
import MessageApplicationRoutes from "./MessageApplicationRoutes";
import {useAuth} from "../context/AuthContext";



function MessageApplication (){

    const {setAuth,auth} = useAuth();


    return (
    <>
        <header>
            <h1>SnapBoard👻</h1>
        </header>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/snapboard"}>SnapBoard</Link>
            <div style={{flex: 1}}></div>
            {!auth ?
            <Link to={"/login"}>Login</Link>
            : <Link to={"/login"} onClick={()=>setAuth(false)}>Logout</Link>}
        </nav>
        <main>
            <MessageApplicationRoutes/>
        </main>
        <footer>By Arian☠️ and Simen☠️</footer>

    </>
    );
}

export default MessageApplication;