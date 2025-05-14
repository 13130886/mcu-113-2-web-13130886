import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product' },
  { path: 'products', component: ProductPageComponent },
  { path: 'login', component: LoginPageComponent },
];
