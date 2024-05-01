import { TUser } from "../auth";

type TUserAccount = TUser & {
  password?: string;
};

export const users: TUserAccount[] = [
  {
    avatar: "https://avatars.githubusercontent.com/u/22109882?v=4",
    name: "Thanh Nguyen",
    username: "admin",
    email: "admin@materialadminlte.com",
    role: "admin",
    password: "test",
  },
];
