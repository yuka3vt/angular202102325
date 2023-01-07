import { Component, Input, Renderer2,AfterViewInit,OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $:any;
declare const Plugin:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements AfterViewInit,OnInit {
  @Input() moduleName: string = "";

  constructor(private router : Router,private renderer: Renderer2) { 
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    $('[data-widget="treeview"]').Treeview("init");
    Plugin.class($(this))
  }
  userId = sessionStorage.getItem("userId");
}