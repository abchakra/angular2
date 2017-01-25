import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <nav class="navbar navbar-default">
   <div class="container-fluid">
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/trips">Trips</a>
    </div>
</nav>

   <router-outlet></router-outlet>
  `
})

export class AppComponent {


  title = 'My Trip Itenary';


}


