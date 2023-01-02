import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterSchoolComponent } from './schoolhelp-admin/register-school/register-school.component';
import { RegisterSchoolAdminComponent } from './schoolhelp-admin/register-school-admin/register-school-admin.component';
import { DashboardSchoolhelpAdminComponent } from './schoolhelp-admin/dashboard-schoolhelp-admin/dashboard-schoolhelp-admin.component';
import { HeaderComponent } from './header/header.component';
import { ViewRequestsComponent } from './volunteer/view-requests/view-requests.component';
import { DashboardVolunteerComponent } from './volunteer/dashboard-volunteer/dashboard-volunteer.component';
import { DashboardSchoolAdminComponent } from './school-admin/dashboard-school-admin/dashboard-school-admin.component';
import { SubmitRequestAssistanceComponent } from './school-admin/submit-request-assistance/submit-request-assistance.component';
import { SubmitRequestResourceComponent } from './school-admin/submit-request-resource/submit-request-resource.component';
import { ReviewOffersComponent } from './school-admin/review-offers/review-offers.component';
import { LoginComponent } from './login/login.component';
import { RegisterVolunteerComponent } from './register-volunteer/register-volunteer.component';
import { RegisterSchoolDialogComponent } from './schoolhelp-admin/register-school/register-school-dialog/register-school-dialog.component';
import { RegisterSchoolAdminDialogComponent } from './schoolhelp-admin/register-school-admin/register-school-admin-dialog/register-school-admin-dialog.component';
import { ReviewOffersDialogComponent } from './school-admin/review-offers/review-offers-dialog/review-offers-dialog.component';
import { AssistanceDialogComponent } from './school-admin/submit-request-assistance/assistance-dialog/assistance-dialog.component';
import { ResourceDialogComponent } from './school-admin/submit-request-resource/resource-dialog/resource-dialog.component';
import { SubmitOfferDialogComponent } from './volunteer/view-requests/submit-offer-dialog/submit-offer-dialog.component';
import { SchoolAdminHeadComponent } from './school-admin/school-admin-head/school-admin-head.component';
import { SchoolhelpAdminHeadComponent } from './schoolhelp-admin/schoolhelp-admin-head/schoolhelp-admin-head.component';
import { VolunteerHeadComponent } from './volunteer/volunteer-head/volunteer-head.component';
import { EditProfileVolunteerComponent } from './volunteer/edit-profile-volunteer/edit-profile-volunteer.component';
import { EditProfileSchoolAdminComponent } from './school-admin/edit-profile-school-admin/edit-profile-school-admin.component';
import { ProfileUpdateComponent } from './school-admin/edit-profile-school-admin/profile-update/profile-update.component';
import { ChangePasswordComponent } from './school-admin/edit-profile-school-admin/change-password/change-password.component';
import { ReviewOffersRequestComponent } from './school-admin/review-offers/review-offers-request/review-offers-request.component';
import { ChangePasswordVolunteerComponent } from './volunteer/edit-profile-volunteer/change-password-volunteer/change-password-volunteer.component';
import { ProfileUpdateVolunteerComponent } from './volunteer/edit-profile-volunteer/profile-update-volunteer/profile-update-volunteer.component';
import { AuthInterceptor } from './helper/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterSchoolComponent,
    RegisterSchoolAdminComponent,
    DashboardSchoolhelpAdminComponent,
    HeaderComponent,
    ViewRequestsComponent,
    DashboardVolunteerComponent,
    DashboardSchoolAdminComponent,
    SubmitRequestAssistanceComponent,
    SubmitRequestResourceComponent,
    ReviewOffersComponent,
    LoginComponent,
    RegisterVolunteerComponent,
    RegisterSchoolDialogComponent,
    RegisterSchoolAdminDialogComponent,
    ReviewOffersDialogComponent,
    AssistanceDialogComponent,
    ResourceDialogComponent,
    SubmitOfferDialogComponent,
    SchoolAdminHeadComponent,
    SchoolhelpAdminHeadComponent,
    VolunteerHeadComponent,
    EditProfileVolunteerComponent,
    EditProfileSchoolAdminComponent,
    ProfileUpdateComponent,
    ChangePasswordComponent,
    ChangePasswordVolunteerComponent,
    ProfileUpdateVolunteerComponent,
    ReviewOffersRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
