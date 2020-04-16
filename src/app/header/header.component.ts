import { Component, OnInit, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSelect(feature){
    this.featureSelected.emit(feature)
  }
}
