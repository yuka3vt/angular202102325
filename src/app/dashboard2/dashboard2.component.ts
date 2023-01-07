import { Component, AfterViewInit,Renderer2 } from '@angular/core';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements AfterViewInit {

  constructor(private renderer:Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body,"sidebar-open");
    this.renderer.addClass(document.body,"sidebar-closed");
  }

}
