import {Role} from "./role";

export class User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
}
