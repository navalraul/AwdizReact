import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Home() {


    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "usr")
        if(user) {
            setIsUserLoggedIn(true);
        }
    },[])


    function logout () {
        localStorage.removeItem("Current-user");
        setIsUserLoggedIn(false);
        alert("Logout Successfull")
    }

    function addCart() {
        if(isUserLoggedIn) {

            alert("You are logged in you can add to cart")
        } else {
            alert("Please Login first")
        }
    }
    
    return (
        <>
        <div>
            { isUserLoggedIn ? <div onClick={logout}>Logout</div>: <button onClick={ () => router('/login')}>Login</button>}
        </div>
        <button onClick={addCart}> Add to Cart </button>
        </>
    )
}

export default Home;