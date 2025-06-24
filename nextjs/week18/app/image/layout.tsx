// interface childProp {
//   children: React.ReactNode;
// }
// const layout = ({ children }: childProp) => {
//   return <div>{children}</div>;
// };

// export default layout;
// /app/image/layout.tsx

import React from "react";

interface ChildProp {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildProp) {
  return <div>{children}</div>;
}
