import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './complex_components/list_page/list.page.component';
import { ListDetailsComponent } from './complex_components/list_details/list.details.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: ListPageComponent },
    { path: 'dashboard/details', component: ListDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}