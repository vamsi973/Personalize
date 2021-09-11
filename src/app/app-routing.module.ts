
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/guard/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },

            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'notes',
                loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule)
            },
            {
                path: 'budget',
                loadChildren: () => import('./modules/finance/finance.module').then(m => m.FinanceModule)
            }
       
        ]
    },
    // { path: '**', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }