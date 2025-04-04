import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center bg-amber-50  min-h-screen h-full">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
      </main>
    </div>
  );
};

export default Home;
