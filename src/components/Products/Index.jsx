import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
//import { popularProducts } from "../../data";
import Product from "../Product/Index";

const Products = ({ cat, filters, sort }) => {
  //console.log(cat, "cat", filters, "filters", sort, "sort")
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         cat
  //           ? `http://localhost:5000/api/products?category=${cat}`
  //           : "http://localhost:5000/api/products"
  //       );
  //       setProducts(res.data);
  //       console.log(res.data, "res.data....... within the function");
  //     } catch (error) {}
  //   };
  //   getProducts();
  // }, [cat]);



  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          //cat
           //"http://localhost:5000/api/products?category=pants"
            //: 
            "http://localhost:5000/api/products"
        );
       setProducts(res.data);
        console.log(res.data,  "res.data....... within the function", res, "res...");
      } catch (error) {}
    };
    getProducts();
  }, [cat]);
  console.log(products, "products");

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

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
