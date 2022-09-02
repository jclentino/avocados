import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Products = ()=> {    
    const id = useRouter()
    const [product, setProduct] = useState({})

    useEffect(()=> {
        window
            .fetch(`/api/avo/${id.query.id}`)
            .then(res => res.json())
            .then(resJson => setProduct(resJson))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="card" >
            <div>
                <img src={product.image} alt="image" />
            </div>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.attributes?.description}</p>
            <button>Add to car </button>
            <style jsx>{`
                .card {
                    display: flex; 
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center; 
                    height: 100vh;
                    text-align: center; 
                }
            `}</style>
        </div>
    )
}

export default Products 