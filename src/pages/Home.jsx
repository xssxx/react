import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import instance from "../services";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [id, setId] = useState(null);

  const params = useParams();

  const fetchProducts = async () => {
    try {
      const res = await instance.get("/products");
      setProducts(res.data);
      console.log(products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    if (params.id) {
      setId(params.id);
    } else {
      setId(null);
    }
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center bg-amber-50  min-h-screen h-full">
        {products ? (
          id !== null ? (
            products
              .filter((product) => product.id === parseInt(id))
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              ))
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))
          )
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Home;
