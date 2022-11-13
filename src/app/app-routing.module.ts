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
import { SubmitRequestAssistanceComponent } from './school-admin/submit-request-assistance/submit-request-assistance.component';
import { ResourceDialogComponent } from './school-admin/submit-request-resource/resource-dialog/resource-dialog.component';
import { SubmitRequestResourceComponent } from './school-admin/submit-request-resource/submit-request-resource.component';
import { DashboardSchoolhelpAdminComponent } from './schoolhelp-admin/dashboard-schoolhelp-admin/dashboard-schoolhelp-admin.component';
import { RegisterSchoolAdminDialogComponent } from './schoolhelp-admin/register-school-admin/register-school-admin-dialog/register-school-admin-dialog.component';
import { RegisterSchoolAdminComponent } from './schoolhelp-admin/register-school-admin/register-school-admin.component';
import { RegisterSchoolDialogComponent } from './schoolhelp-admin/register-school/register-school-dialog/register-school-dialog.component';
import { RegisterSchoolComponent } from './schoolhelp-admin/register-school/register-school.component';
import { DashboardVolunteerComponent } from './volunteer/dashboard-volunteer/dashboard-volunteer.component';
import { ChangePasswordVolunteerComponent } from './volunteer/edit-profile-volunteer/change-password-volunteer/change-password-volunteer.component';
import { EditProfileVolunteerComponent } from './volunteer/edit-profile-volunteer/edit-profile-volunteer.component';
import { ProfileUpdateVolunteerComponent } from './volunteer/edit-profile-volunteer/profile-update-volunteer/profile-update-volunteer.component';
import { ViewRequestsComponent } from './volunteer/view-requests/view-requests.component';

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
  {path: 'edit-profile-volunteer', component: EditProfileVolunteerComponent},
  {path: 'profile-update-volunteer', component: ProfileUpdateVolunteerComponent},
  {path: 'change-password-volunteer', component: ChangePasswordVolunteerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
