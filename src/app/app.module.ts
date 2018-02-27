import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import {UserServiceService} from './service/user-service.service';
import { User} from './user';



import { RootComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { Child1Component } from './family/child1/child1.component';
import { Child2Component } from './family/child2/child2.component';
import { MotherComponent } from './family/mother/mother.component';
import { NgforcomponentComponent } from './directive/ngforcomponent/ngforcomponent.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ModelformComponent } from './forms/modelform/modelform.component';
import { ServiceComponent } from './consumeservice/service/service.component';
import { Service2Component } from './consumeservice/service2/service2.component';

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
        },
        {
          path:"templateform",
          component:TemplateformComponent
        },
        {
          path:"modelform",
          component:ModelformComponent
        },
        {
          path:"consumeservice1",
          component:ServiceComponent
        },
        {
          path:"consumeservice2",
          component:Service2Component
        }


];

@NgModule({
  declarations: [
    RootComponent,
    FatherComponent,
    Child1Component,
    Child2Component,
    MotherComponent,
    NgforcomponentComponent,
    TemplateformComponent,
    ModelformComponent,
    ServiceComponent,
    Service2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [ UserServiceService],
  bootstrap: [RootComponent]
})
export class    AppModule1 { }
