import { Role } from "./role.model";

export class UserVolunteer{
    id: number;
    username: string;
    password: string;
    fullname: string;
    Email: string;
    phone: string;
    role : Role;
    dob: string;
    occupation: string;
}