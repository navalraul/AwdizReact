
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {


    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct]= useState({});
    const {id} = useParams();

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


    console.log(singleProduct, "-singleProduct")

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
            <div style={{ width: "40%", height: "650px", border: "5px solid black" }}>
                <img style={{ width: "100%", height: "100%" }} src={singleProduct.image} />
            </div>
            <div style={{ width: "50%", height: "700px", border: "5px solid blue" }}>
                <h1>Name :{singleProduct.title}</h1>
                <h2>Price : {singleProduct.price}</h2>
            </div>
        </div>
    </div>
  )
}

export default Product;