import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";


function Navbar() {

    const { state, login,logout} = useContext(AuthContext);
    console.log(state,"-state from navbar")

    const [user, setUser] = useState({});
    const router = useNavigate();

    useEffect (() => {
        if(state?.user) {
            setUser(state?.user)
        } else {
            setUser({});
        }
    },[state])


    

    return (
        <div style={{ display: "flex", justifyContent:"space-around", border: "3px solid black"}}>
           <div style={{ width:"30%"}}>
            <h3>Awdiz</h3></div>
           <div style={{ display:"flex", width: '60%', justifyContent: 'right'}}>
            {user?.email ?
            <>
                <h3 onClick={ ()=> router('/product-from-backend')}>Products</h3>
                <h3 style={{ marginLeft:'40px'}}>Profile</h3>
                <h3 onClick={logout} style={{ marginLeft:'40px'}}>Logout</h3>
                <h3 onClick={ () => router('/cart')} style={{ marginLeft:'40px'}}>Cart</h3>
            </>
            :
            <h3 onClick={ () => router('/login')}>Login</h3>
            }
           </div>
        </div>
    )
}

export default Navbar;