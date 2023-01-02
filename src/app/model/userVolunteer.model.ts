import { Role } from "./role.model"; // Calling Role model

/**
 * This is the user volunteer model for 
 * assigning new variable
 */
export class UserVolunteer{
    id: number;
    username: string;
    password: string;
    fullname: string;
    email: string;
    phone: string;
    role : string; // Using Role model for assigning the user's role
    dob: string;
    occupation: string;
}