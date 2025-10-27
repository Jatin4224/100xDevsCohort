import { EffectProvider } from "effect-atom/react";

const countAtom = atom(0);

export function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}
