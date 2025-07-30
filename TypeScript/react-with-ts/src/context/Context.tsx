import { createContext, useState, type FC, type ReactNode } from "react";

interface ContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const Context = createContext<ContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface Providerprops {
  children: ReactNode;
}

const Provider: FC<Providerprops> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Context.Provider value={{ count, increment, decrement }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
