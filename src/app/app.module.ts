import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { HttpClientModule } from '@angular/common/http';
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
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HeaderComponent } from './header/header.component';
import { ViewRequestsComponent } from './volunteer/view-requests/view-requests.component';
import { SubmitOfferComponent } from './volunteer/submit-offer/submit-offer.component';
import { DashboardVolunteerComponent } from './volunteer/dashboard-volunteer/dashboard-volunteer.component';
import { DashboardSchoolAdminComponent } from './school-admin/dashboard-school-admin/dashboard-school-admin.component';
import { SubmitRequestComponent } from './school-admin/submit-request/submit-request.component';
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
import { SchoolAdminNavComponent } from './school-admin/school-admin-nav/school-admin-nav.component';
import { SchoolhelpAdminNavComponent } from './schoolhelp-admin/schoolhelp-admin-nav/schoolhelp-admin-nav.component';
import { VolunteerNavComponent } from './volunteer/volunteer-nav/volunteer-nav.component';
import { SchoolAdminHeadComponent } from './school-admin/school-admin-head/school-admin-head.component';
import { EditProfileSchoolAdminComponent } from './school-admin/edit-profile-school-admin/edit-profile-school-admin.component';
import { SchoolhelpAdminHeadComponent } from './schoolhelp-admin/schoolhelp-admin-head/schoolhelp-admin-head.component';
import { VolunteerHeadComponent } from './volunteer/volunteer-head/volunteer-head.component';
import { EditProfileVolunteerComponent } from './volunteer/edit-profile-volunteer/edit-profile-volunteer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterSchoolComponent,
    RegisterSchoolAdminComponent,
    DashboardSchoolhelpAdminComponent,
    SideNavigationComponent,
    HeaderComponent,
    ViewRequestsComponent,
    SubmitOfferComponent,
    DashboardVolunteerComponent,
    DashboardSchoolAdminComponent,
    SubmitRequestComponent,
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
    SchoolAdminNavComponent,
    SchoolhelpAdminNavComponent,
    VolunteerNavComponent,
    SchoolAdminHeadComponent,
    EditProfileSchoolAdminComponent,
    SchoolhelpAdminHeadComponent,
    VolunteerHeadComponent,
    EditProfileVolunteerComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
