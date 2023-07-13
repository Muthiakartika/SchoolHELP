import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterVolunteerComponent } from './register-volunteer/register-volunteer.component';
import { DashboardSchoolAdminComponent } from './school-admin/dashboard-school-admin/dashboard-school-admin.component';
import { ChangePasswordComponent } from './school-admin/edit-profile-school-admin/change-password/change-password.component';
import { EditProfileSchoolAdminComponent } from './school-admin/edit-profile-school-admin/edit-profile-school-admin.component';
import { ProfileUpdateComponent } from './school-admin/edit-profile-school-admin/profile-update/profile-update.component';
import { ReviewOffersDialogComponent } from './school-admin/review-offers/review-offers-dialog/review-offers-dialog.component';
import { ReviewOffersRequestComponent } from './school-admin/review-offers/review-offers-request/review-offers-request.component';
import { ReviewOffersComponent } from './school-admin/review-offers/review-offers.component';

import { AssistanceDialogComponent } from './school-admin/submit-request-assistance/assistance-dialog/assistance-dialog.component';

import { SubmitOfferDialogComponent } from './volunteer/view-requests/submit-offer-dialog/submit-offer-dialog.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},

  
  // schoolHELP ADMIN
  {path: 'register-school', component: RegisterSchoolComponent},
  {path: 'register-school-admin', component: RegisterSchoolAdminComponent},
  {path: 'dashboard-schoolhelp-admin', component:DashboardSchoolhelpAdminComponent},
  {path: 'school-create', component:RegisterSchoolDialogComponent},
  {path: 'schoolAdmin-create', component:RegisterSchoolAdminDialogComponent},

  // ADMINISTRATOR
  {path: 'dashboard-school-admin', component: DashboardSchoolAdminComponent},
  {path: 'submit-request-assistance', component: SubmitRequestAssistanceComponent},
  {path: 'submit-request-resource', component: SubmitRequestResourceComponent},
  {path: 'review-offers', component: ReviewOffersComponent},
  {path: 'request-offers', component: ReviewOffersDialogComponent},
  {path: 'review-offers-request', component:ReviewOffersRequestComponent},
  {path: 'edit-profile-school-admin', component: EditProfileSchoolAdminComponent},
  {path: 'profile-update-school-admin', component: ProfileUpdateComponent},
  {path: 'change-password-school-admin', component: ChangePasswordComponent},
  {path: 'request-assistance-create', component:AssistanceDialogComponent},
  {path: 'request-resource-create', component:ResourceDialogComponent},

  // VOLUNTEER
  {path: 'register-volunteer', component: RegisterVolunteerComponent},
  {path: 'dashboard-volunteer', component: DashboardVolunteerComponent},
  {path: 'view-requests', component: ViewRequestsComponent},

  {path: 'submit-offer/:requestId', component: SubmitOfferDialogComponent},

  {path: 'edit-profile-volunteer', component: EditProfileVolunteerComponent},
  {path: 'profile-update-volunteer', component: ProfileUpdateVolunteerComponent},
  {path: 'change-password-volunteer', component: ChangePasswordVolunteerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
