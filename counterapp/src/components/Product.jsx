
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentUserEmail, setCurrentUserEmail] = useState("");
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct]= useState({});
    const {id} = useParams();
    const router = useNavigate();

    
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, [])
    
    useEffect(() => {
        if(id && products.length) {
            const result = products.find((products) => products.id == id);
            
            setSingleProduct(result)
        }
    },[id, products])
    
    
    useEffect (() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "usr")
        if (user) {
            setIsUserLoggedIn(true);
            setCurrentUserEmail(user.email)
        }
    }, [])
    
    console.log(singleProduct, "-singleProduct")
    
    function addCart() {
        if (isUserLoggedIn) {
            const users = JSON.parse(localStorage.getItem("Users"));
            
            for (var i = 0; i < users.length; i++) {
                if(users[i].email == currentUserEmail) {
                    users[i].cart.push(singleProduct);
                    localStorage.setItem("Users", JSON.stringify(users));
                    break;
                }
            }
            alert("Product added successfully to cart!")
            router('/product-from-backend')
        } else {
            alert("You cant add product before login...")
        }
    }


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
            <div style={{ width: "40%", height: "650px", border: "5px solid black" }}>
                <img style={{ width: "100%", height: "100%" }} src={singleProduct.image} />
            </div>
            <div style={{ width: "50%", height: "700px", border: "5px solid blue" }}>
                <h1>Name :{singleProduct.title}</h1>
                <h2>Price : {singleProduct.price}</h2>
                <button onClick={addCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product;
