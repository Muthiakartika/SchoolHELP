import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterVolunteerComponent } from './register-volunteer/register-volunteer.component';
import { DashboardSchoolAdminComponent } from './school-admin/dashboard-school-admin/dashboard-school-admin.component';
import { ReviewOffersComponent } from './school-admin/review-offers/review-offers.component';
import { SubmitRequestAssistanceComponent } from './school-admin/submit-request-assistance/submit-request-assistance.component';
import { SubmitRequestResourceComponent } from './school-admin/submit-request-resource/submit-request-resource.component';
import { SubmitRequestComponent } from './school-admin/submit-request/submit-request.component';
import { DashboardSchoolhelpAdminComponent } from './schoolhelp-admin/dashboard-schoolhelp-admin/dashboard-schoolhelp-admin.component';
import { RegisterSchoolAdminComponent } from './schoolhelp-admin/register-school-admin/register-school-admin.component';
import { RegisterSchoolComponent } from './schoolhelp-admin/register-school/register-school.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardVolunteerComponent } from './volunteer/dashboard-volunteer/dashboard-volunteer.component';
import { SubmitOfferComponent } from './volunteer/submit-offer/submit-offer.component';
import { ViewRequestsComponent } from './volunteer/view-requests/view-requests.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  
  {path: 'register-school', component: RegisterSchoolComponent},
  {path: 'register-school-admin', component: RegisterSchoolAdminComponent},
  {path: 'dashboard-schoolhelp-admin', component:DashboardSchoolhelpAdminComponent},

  {path: 'dashboard-school-admin', component: DashboardSchoolAdminComponent},
  {path: 'submit-request', component: SubmitRequestComponent},
  {path: 'submit-request-assistance', component: SubmitRequestAssistanceComponent},
  {path: 'submit-request-resource', component: SubmitRequestResourceComponent},
  {path: 'review-offers', component: ReviewOffersComponent},

  {path: 'register-volunteer', component: RegisterVolunteerComponent},
  {path: 'dashboard-volunteer', component: DashboardVolunteerComponent},
  {path: 'view-requests', component: ViewRequestsComponent},
  {path: 'submit-offer', component: SubmitOfferComponent},

  {path: 'edit-profile', component: EditProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
