import React, {useEffect, useState} from 'react'
import ItemListContainer from './ItemListContainer'
import './ItemList.css'
import { Link } from 'react-router-dom'

// Firebase
import {collection, getDocs } from 'firebase/firestore'
import {db} from '../../Firebase/Firebase'

const ItemList=()=> {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const requestData = async() =>{
          const docs = [];
          const items = await getDocs(collection(db, 'products'))
          items.forEach((document)=>{
            docs.push({...document.data(), id: document.id})
        })
        setProducts(docs)
    }
    requestData()
}, [])
products.sort(function (a, b) {
    if (a.tipo > b.tipo) {
        return 1;
    }
    if (a.tipo < b.tipo) {
        return -1;
    }
    // a must be equal to b
    return 0;
});    
console.log(products)
    return (
        <div>
            {products.map((product)=>{
                return (
                    <div className='cardConteiner' key={product.id}>
                        <Link to={`/ItemDetail/${product.id}`}>
                            <ItemListContainer data={product} />
                        </Link>
                    </div>
                );
            })}
            
        </div>
    )

}

export default ItemList