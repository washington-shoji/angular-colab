import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Amazon Copy Cat';
  loadedFeature = 'users'
  userSelected: string;
  
  // @Output() selectedFeature = new EventEmitter<string>();

  onSelect(feature: string){
    this.loadedFeature = feature;
    
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
