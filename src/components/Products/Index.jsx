import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
//import { popularProducts } from "../../data";
import Product from "../Product/Index";

const Products = ({ cat, filters, sort }) => {
  //console.log(cat, "cat", filters, "filters", sort, "sort")
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
           cat
             ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
         );
        setProducts(res.data);
        //console.log(res.data, "res.data....... within the function");
      } catch (error) {}
    };
    getProducts();
  }, [cat]);


 

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);


  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
