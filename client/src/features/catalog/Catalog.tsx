import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";



export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  
    },[])
  
    function addProduct() {
      setProducts(prevState => [...prevState, { 
        id: prevState.length+100,
        name: "product" + (prevState.length + 1),
         price: (prevState.length * 100) + 100,
        description: "Some details",
        type: "some type",
        pictureURL:"http://picsum.photos/200"
        }]);
    }
  

    return (
        <>

           <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>Click me!</Button>

        </>
    )

}


