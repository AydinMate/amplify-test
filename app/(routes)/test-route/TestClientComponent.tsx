"use client";

import React, { useState } from "react";

interface Product {
  id: string;
  name: string;
}

interface TestClientComponentProps {
  products: Product[];
}

const TestClientComponent: React.FC<TestClientComponentProps> = ({
  products,
}) => {
  const [counter, setCounter] = useState(1);

  const addHandler = () => {
    setCounter(counter + 1);
  };

  const subtractHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <button onClick={addHandler}>add</button>
        <button onClick={subtractHandler}>subtract</button>
        <p>{counter}</p>
      </div>
      {products.length > 0
        ? products.map((product: Product) => (
            <p key={product.id}>{product.name}</p>
          ))
        : "products not found"}
    </>
  );
};

export default TestClientComponent;
