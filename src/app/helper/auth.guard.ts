// import { Injectable } from "@angular/core";
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from "@angular/router";
// import { AuthService } from "../service/auth/auth.service";


// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate{
//     constructor(
//         private router: Router,
//         private auth: AuthService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const user = this.auth.userValue;
//         if (user) {
//             // check if route is restricted by role
//             const { roles } = route.data;
//             if (roles && !roles.includes(user.role)) {
//                 // role not authorized so redirect to home page
//                 this.router.navigate(['/']);
//                 return false;
//             }

//             // authorized so return true
//             return true;
//         }

//         // not logged in so redirect to login page with the return url
//         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//         return false;
//     }
// }