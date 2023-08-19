"use client"

import React, { useState } from 'react';

interface TestClientComponentProps {
 
}

const TestClientComponent: React.FC<TestClientComponentProps> = ({}) => {

    const [counter, setCounter] = useState(1)

    const addHandler = () => {
        setCounter(counter + 1)
    }


    const subtractHandler = () => {
        setCounter(counter - 1)
    }


  return (
    <div>
      <button onClick={addHandler}>add</button>
      <button onClick={subtractHandler}>subtract</button>
      <p>{counter}</p>
    </div>
  );
}

export default TestClientComponent;