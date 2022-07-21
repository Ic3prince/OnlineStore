import { Product } from "../../app/models/product";
import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import ProductCard from "./ProductCard";

interface Props{

    products : Product[];
    
}

export default function ProductList({products} : Props  )  {

    return (
        
        <Grid container spacing={4}>
        {
         products.map((product) => (
            <Grid key={product.id} item xs={4}>
           <ProductCard  product = {product}/>
</Grid>
        ))}
    </Grid>
    
    )
}