import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';

//Basic Routing:
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
//   { path: 'members/:id', component: MemberDetailComponent },
//   { path: 'lists', component: ListsComponent },
//   { path: 'messages', component: MessagesComponent },
//   { path: '**', component: HomeComponent, pathMatch: 'full' }
// ];

//Route with dummy route and authguard
const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path: 'members', component: MemberListComponent},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent}
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }