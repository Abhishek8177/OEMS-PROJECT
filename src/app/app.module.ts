import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './components/admin/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import{MatCardModule} from '@angular/material/card'
import{MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import{MatListModule} from '@angular/material/list'
import{MatTableModule} from '@angular/material/table'
import{MatSlideToggleModule} from '@angular/material/slide-toggle'
import{MatSelectModule} from '@angular/material/select'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { AdminSidebarComponent } from './components/admin/sidebar/sidebar.component';
import { UserdashboardComponent } from './components/user/userdashboard/userdashboard.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/category/update-category/update-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddquizesComponent } from './components/admin/Quizes/addquizes/addquizes.component';
import { UpdatequizeComponent } from './components/admin/Quizes/updatequize/updatequize.component';
import { ViewquizeComponent } from './components/admin/Quizes/viewquize/viewquize.component';
import { AddQuestionComponent } from './components/admin/Question/add-question/add-question.component';
import { ViewQuestionComponent } from './components/admin/Question/view-question/view-question.component';
import { UpdateQuestionComponent } from './components/admin/Question/update-question/update-question.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AuthInterceptor } from './services/interceptor/auth.interceptor';
import { UserNavbarComponent } from './components/user/user-navbar/user-navbar.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { UserWelcomPageComponent } from './components/user/user-welcom-page/user-welcom-page.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { LoadQuizesComponent } from './components/user/load-quizes/load-quizes.component';
import { InstructionComponent } from './components/user/instruction/instruction.component';
import { StartExamComponent } from './components/user/start-exam/start-exam.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdmindashboardComponent,
    AdminSidebarComponent,
    UserdashboardComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ProfileComponent,
    AddquizesComponent,
    UpdatequizeComponent,
    ViewquizeComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    UpdateQuestionComponent,
    UserNavbarComponent,
    UserSidebarComponent,
    UserWelcomPageComponent,
    UserProfileComponent,
    LoadQuizesComponent,
    InstructionComponent,
    StartExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,



  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
