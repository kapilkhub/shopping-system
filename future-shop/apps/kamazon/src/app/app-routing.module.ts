import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KamazonLayoutComponent } from '@kamazon/layout-lib';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
      path: "home",
      component:HomeComponent
    },
    {
      path: "",      
      loadChildren:() => import("@kamazon/util-auth-lib").then(m=>m.SharedUtilAuthModule),
      data: { title: "auth" }
    },
    {
      path: "products",
      component:KamazonLayoutComponent,
      loadChildren:() => import("@kamazon/products/feature").then(m=>m.ProductsFeatureModule),
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}