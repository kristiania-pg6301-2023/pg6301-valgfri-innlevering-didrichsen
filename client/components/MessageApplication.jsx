import {Link} from "react-router-dom";

function MessageApplication (){

    return (
    <>
        <header>
            <h1>Message Board</h1>
        </header>
        <nav>
            <Link to={"#"}>Home</Link>
        </nav>
        <main>
            <h1></h1>
        </main>
        <footer>By Arian and Simen</footer>

    </>
    );
}

export default MessageApplication;