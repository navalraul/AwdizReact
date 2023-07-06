

import React, { useState } from 'react'

const Formone = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    console.log(name, "- name")
    console.log(email, "-email")
    console.log(password, "-password")


    function toSetName(event) {
        console.log(event.target.value, "- check here");
        setName(event.target.value)
    }
    function toSetEmail(event) {
        console.log(event.target.value, "- check here");
        setEmail(event.target.value)
    }
    function toSetPassword(event) {
        console.log(event.target.value, "- check here");
        setPassword(event.target.value)
    }

    function submitData(event) {
        event.preventDefault();
        // alert("Working")

        if(!name) {
            return alert("Name is required!")
        }
        if(name.length < 6) {
            return alert("Name should be atleast 6 digit")
        }
        if(!email) {
            return alert("Email is required!")
        }
        if(!password) {
            return alert("Password is required!")
        }
        if(password.length < 8) {
            return alert("Password should be atleast 8 digit")
        }

        const res = { data: { message: "ok", status: 200 }}
        if(res.data.message == "ok") {
            return alert("Registration Sussesful!")
        } else {
            return alert("Internal error, Please try again..")
        }
    }



  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <form onSubmit={submitData}>
        <label>Name :</label><br/>
        <input onChange={toSetName} type='text' placeholder='Your name here...'/><br/>
        <label>Email :</label><br/>
        <input onChange={toSetEmail} type='email' placeholder='Your email here..'/><br/>
        <label>Password :</label><br/>
        <input onChange={toSetPassword} type='password' placeholder='Your password here...'/><br/>
        <input type='submit'value='Register'/>
      </form>
    </div>
  )
}

export default Formone
