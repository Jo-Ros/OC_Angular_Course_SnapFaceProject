import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
    { path: 'facesnaps', loadChildren: () => 
        import('./facesnaps/facesnaps.module').then(fileModule => fileModule.FacesnapsModule) 
    },
    { path: '', component: LandingPageComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}