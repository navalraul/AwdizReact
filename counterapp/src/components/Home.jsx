import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";



function Home() {

    const { state, login,logout} = useContext(AuthContext);
    // console.log(state, "state from home")
    
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        if(state?.user?.email) {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false)
        }
    },[state])


    // function addCart() {
    //     if(isUserLoggedIn) {

    //         alert("You are logged in you can add to cart")
    //     } else {
    //         alert("Please Login first")
    //     }
    // }
    
    return (
        <>
        <div style={{ textAlign: 'center'}}>
            <h1>Welcome to Awdiz Class</h1>
            { isUserLoggedIn ? <div onClick={ () => logout()}>Logout</div>: <button onClick={ () => router('/login')}>Login</button>}
        </div>
        
        </>
    )
}

export default Home;