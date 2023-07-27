import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideIn } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideIn
  ]
})
export class AppComponent {
  title = 'AirlineReviewApp';

  constructor(private contexts: ChildrenOutletContexts){

  }

  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
