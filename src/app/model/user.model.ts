import { Role } from "./role.model";

export class User{
    id: number;
    username: string;
    password: string;
    fullname: string;
    email: string;
    phone: string;
    role : Role;
    staffID: number;
    position: string;
    schoolName: string;
}