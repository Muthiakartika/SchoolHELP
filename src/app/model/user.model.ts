import { Role } from "./role.model"; // Calling Role model

/**
 * This is the user model for 
 * assigning new variable
 */
export class User{
    id: number;
    username: string;
    password: string;
    fullname: string;
    email: string;
    phone: string;
    role : string; // Using Role model for assigning the user's role
    staffID: string;
    position: string;
    schoolName: string;
    schoolCity: string;
}