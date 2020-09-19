import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

    {
      path: "",
      loadChildren:() => import("@kamazon/util-auth-lib").then(m=>m.SharedUtilAuthModule),
      data: { title: "auth" }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}