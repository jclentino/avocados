import KawaiHeader from "@components/KawaiHeader"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const Home = ()=> {
    const [productList,setProductList] = useState([])
    console.log(productList)

    useEffect(()=> {
        window.fetch('api/avo')
            .then(avos => avos.json())
            .then(({ data, length }) => setProductList(data))
    }, [])

    return <div>
        <KawaiHeader />       
        <div className="containerCard">
            {
                productList.map(prod => (
                    <Link href={`/products/${prod.id}`}>
                        <div>
                            <p><img src={prod.image} alt={prod.name}/></p>
                            <div>
                                <p>Name: {prod.name}</p>
                                <p>Price: {prod.price}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
        <style jsx>{`
            .containerCard {
                display: flex;
                flex-direction: column;  
            }

            .containerCard > div {
                border: 1px solid black;
                border-radius: 4px;
                margin-bottom: 20px; 
                margin-right: 10px;
                margin-left: 10px;
            }


        `}</style>
    </div>  
}

export default Home 