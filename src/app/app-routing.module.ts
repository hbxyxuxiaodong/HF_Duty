import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {HomeModule} from "./home/home.module";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy"
const route:Routes =[
  {path:'',redirectTo:'index/duty',pathMatch:'full'}
]
@NgModule({
  imports:[HomeModule,RouterModule.forRoot(route,{preloadingStrategy:SelectivePreloadingStrategy,enableTracing:true})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
