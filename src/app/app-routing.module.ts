import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './components/user/userdashboard/userdashboard.component';
import { AdminSidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/category/update-category/update-category.component';
import { AddquizesComponent } from './components/admin/Quizes/addquizes/addquizes.component';
import { UpdatequizeComponent } from './components/admin/Quizes/updatequize/updatequize.component';
import { ViewquizeComponent } from './components/admin/Quizes/viewquize/viewquize.component';
import { AddQuestionComponent } from './components/admin/Question/add-question/add-question.component';
import { ViewQuestionComponent } from './components/admin/Question/view-question/view-question.component';
import { UpdateQuestionComponent } from './components/admin/Question/update-question/update-question.component';
import { AdminGuard } from './services/admin-guard/admin.guard';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { UserWelcomPageComponent } from './components/user/user-welcom-page/user-welcom-page.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserGuard } from './services/user-guard/user.guard';
import { LoadQuizesComponent } from './components/user/load-quizes/load-quizes.component';
import { InstructionComponent } from './components/user/instruction/instruction.component';
import { StartExamComponent } from './components/user/start-exam/start-exam.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // {path: 'admin-sidebar', component: AdminSidebarComponent},
  { path: 'admin-dashboard', component: AdmindashboardComponent,
  canActivate:[AdminGuard],
 children: [
      { path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent },
      { path: 'viewcategory', component: ViewCategoryComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'updatecategory/:id', component: UpdateCategoryComponent },
      {path:'addquize', component:AddquizesComponent},
      {path:'updatequize/:id', component:UpdatequizeComponent},
      {path:'viewquize', component:ViewquizeComponent},
      {path:'addQuestion/:id/:title', component:AddQuestionComponent},
      {path:'viewQuestion/:id/:title', component:ViewQuestionComponent},
      {path:'updateQuestion/:id/:title', component:UpdateQuestionComponent}
    
    ]
  },
  // {path:'user-sidebar',component:UserSidebarComponent},

  {
    path: 'user-dashboard', component: UserdashboardComponent,
    canActivate:[UserGuard],
    children:[
      {path:'user-home',component:UserWelcomPageComponent},
      {path:'user-profile',component:UserProfileComponent},
      {path:':category_id',component:LoadQuizesComponent},
      {path:'instruction/:quiz_id',component:InstructionComponent}
    ]
    
  },

  {path:'startExam/:quiz_id', component:StartExamComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
