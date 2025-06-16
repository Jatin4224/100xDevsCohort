type Info = {
  id: number;
  name: string;
  email: string;
};

type AdInfo = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdInfo };
