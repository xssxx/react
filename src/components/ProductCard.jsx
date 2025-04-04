import React from "react";

const ProductCard = ({ id, image, title, description, price }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center mt-4 min-w-64 w-96 border-1 border-gray-300 rounded-md"
    >
      <img src={image} alt={title} className="w-32 h-32" />
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm text-wrap">{description}</p>
      <p className="text-lg font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
