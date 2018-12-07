import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import {VoterComponent} from "./1-voter/voter.component";

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'voter', component: VoterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];
