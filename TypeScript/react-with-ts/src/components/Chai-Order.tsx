import type { FC } from "react";

type chaiType = {
  flavour: string;
  orderId: string;
  isAvailable: boolean;
};

const ChaiOrder: FC<chaiType> = ({ flavour, orderId, isAvailable }) => {
  return (
    <div>
      <h1>{flavour}</h1>
      <h1>{orderId}</h1>
      <h1>{isAvailable}</h1>
    </div>
  );
};

export default ChaiOrder;
