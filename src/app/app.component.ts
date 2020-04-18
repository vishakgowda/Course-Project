import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadeFeature = 'recepie'

  onNavigate(featureData){
    this.loadeFeature = featureData
    console.log(featureData);
  }
}
