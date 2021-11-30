import { where, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

// Firebase

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export default function Macetas() {
  const [products, setProducts] = useState([]);
  const docs = [];

  useEffect(() => {
    const requestData = async () => {
      const q = query(
        collection(db, "products"),
        where("tipo", "==", "maceta")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        docs.push({ ...document.data(), id: document.id });
      });
      setProducts(docs);
    };
    requestData();
  }, []);
  console.log(products)
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="cardConteiner" key={product.id}>
              
            <Link to={`/ItemDetail/${product.id}`}>
              <ItemListContainer data={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
