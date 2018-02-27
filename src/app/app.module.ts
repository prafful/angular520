import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'
import {FormsModule } from '@angular/forms';


import { RootComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { Child1Component } from './family/child1/child1.component';
import { Child2Component } from './family/child2/child2.component';
import { MotherComponent } from './family/mother/mother.component';
import { NgforcomponentComponent } from './directive/ngforcomponent/ngforcomponent.component';

const myRoutes:Routes= [
          {
            path:"myFather",
            component:FatherComponent
        },
        {
          path:"myMother",
          component:MotherComponent
        },
        {
          path:"ngfordirective",
          component:NgforcomponentComponent
        }

];

@NgModule({
  declarations: [
    RootComponent,
    FatherComponent,
    Child1Component,
    Child2Component,
    MotherComponent,
    NgforcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class    AppModule1 { }
