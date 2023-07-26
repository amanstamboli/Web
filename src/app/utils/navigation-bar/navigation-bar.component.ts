import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  enabled1=false;
  enabled2=false;
  constructor() { }

  ngOnInit(): void {
  }

  changeState(){
    if(this.enabled1){
      this.enabled1=false
      this.enabled2=true
    }
    else{
      this.enabled1=true
      this.enabled2=false
    }
  }
}
