import { Routes } from '@angular/router';

import { AddComponent } from 'app/movie/add/add.component';
import { ListComponent } from 'app/movie/list/list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'add', component: AddComponent },
    { path: 'list', component: ListComponent },
    { path: 'edit/:index', component: AddComponent },
];
