import { Component,AfterViewInit,Renderer2} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{
  

  constructor(private renderer :Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body,"register-page");
    this.renderer.removeClass(document.body,"login-page");
    this.renderer.removeClass(document.body,"sidebar-open");
    this.renderer.addClass(document.body,"sidebar-closed");

  }
}
