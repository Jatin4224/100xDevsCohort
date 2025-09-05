// src/components/Counter.tsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
};

export default Counter;

import { createContext } from "react";
interface ContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const Context = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});



 const Provider = {{children}}=> {
  const [count, setCount] = useState(0);
 };