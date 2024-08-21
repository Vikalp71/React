import React, { useState } from 'react';

const Home = () => {
  // Use useState to create a state variable and its setter
  const [Counter, vikalpCounter] =  useState(15);

  const addValue = () => {
     
    vikalpCounter(Counter + 1); 
  };

  const removeValue = () => {
    console.log("Clicked", Counter);
    vikalpCounter(Counter - 1); 
  };

  return (
    <div>
      <h1>Hello Vikalp</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
};

export default Home;
