import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './complex_components/list_page/list.page.component';
import { ListDetailsComponent } from './complex_components/list_details/list.details.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: ListPageComponent },
    { path: 'dashboard/details/:id', component: ListDetailsComponent, resolve: {
        data: ProductResolver
    } },
    { path: '**', component: ListPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}