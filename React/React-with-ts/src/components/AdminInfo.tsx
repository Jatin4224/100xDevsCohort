import type { AdInfo } from "./types";

interface adminProp {
  admin: AdInfo;
}

const AdminInfo = ({ admin }: adminProp) => {
  return (
    <div>
      <h2>{admin.name}</h2>
      <h3>{admin.email}</h3>
    </div>
  );
};

export default AdminInfo;
