import { useEffect } from "react";
import { React, useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ id, title, price, description, image }) => {
  const params = useParams();

  return (
    <div>
      <ProductCard
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        image={image}
      />
    </div>
  );
};

export default Product;
