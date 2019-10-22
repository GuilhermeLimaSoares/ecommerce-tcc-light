import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public controller = false;
  constructor() { }

  ngOnInit() {

    
  }

  public openCart(){
      this.controller = !this.controller;
  }

  
}
