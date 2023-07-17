import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login () {

    const [userData, setUserData] = useState({email:"", password: ""});
    const router = useNavigate();


    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users"));

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if(users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true;
                    break;
                }
            }

            if( flag == false ) {
                return alert("Credentials not matched..")
            } else {
                localStorage.setItem("Current-user", JSON.stringify(userData));
                alert("Login successfull.");
                setUserData({ email: "", password: "" });
                router('/')
            }
            // alert("Login Successfull...")
            // setUserData({ email: "", password: "" })
            // router('/')
        } else {
            alert("All fields are mandatory..")
        }
    }



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type="password" name="password" onChange={handleChange} /><br />
                <input type="submit" value='Login' /><br />
            </form>
        </div>
    )
}

export default Login;