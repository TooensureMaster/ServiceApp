import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { Routes, RouterModule } from '@angular/router';

// Custom Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './features/shopping-list/shopping-edit/shopping-edit.component';
import { ProductItemComponent } from './features/products/product-list/product-item/product-item.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/shop/product/product.component';
import { PreviewComponent } from './pages/shop/product/preview/preview.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'detail', component: ProductComponent },
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ProductItemComponent,
    HomeComponent,
    ShopComponent,
    UserComponent,
    ProductComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
