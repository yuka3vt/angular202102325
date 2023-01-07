import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;
declare const moment : any;

@Component({
  selector: 'app-cuaca',
  templateUrl: './cuaca.component.html',
  styleUrls: ['./cuaca.component.css']
})
export class CuacaComponent implements OnInit, AfterViewInit{
  private table_cuaca : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void{
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this.table_cuaca = $("#table_cuaca").DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 0,
            "render" : function (data: string)
            {
              var waktu = moment(data + " UTC");
              console.log(waktu);

              var html = waktu.local().format("YYYY-MM-DD") + "<br />" + waktu.local().format("HH:mm") + " WIB";
              return html;
            }
          },
          {
            "targets" : 1,
            "render" : function (data: string)
            {
              var html = "<img src='" + data + "' />";
              return html;
            }
          },
          {
            "targets" : 2,
            "render" : function (data: string)
            {
              var array = data.split('||');
              var cuaca = array[0];
              var deskripsi = array[1];
              var html = "<strong>" + cuaca + "</strong><br />" + deskripsi;
              return html;
            }
            
          }
        ]
      }
    );
    this.bind_table_cuaca();
  }

  bind_table_cuaca() : void {
  this.http.get("https://api.openweathermap.org/data/2.5/forecast?id=1630789&appid=29cc38b5df5d071927ec4736c1222837")
  .subscribe((data: any) => {
    console.log(data);

    var list = data.list;
    console.log(list);

    this.table_cuaca.clear();

    list.forEach((element: any) => {
      var weather = element.weather[0];
      console.log(weather);

      var iconUrl = "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png";
      var cuacaDeskripsi = weather.main + "||" + weather.description;

      var main = element.main;
      console.log(main);

      var tempMin = this.kelvinToCelcius(main.temp_min);
      console.log("tempMin : " + tempMin);

      var tempMax = this.kelvinToCelcius(main.temp_max);
      console.log("tempMax : " + tempMax);

      var temp = tempMin + "°C - " + tempMax + "°C";

      var row = [
        element.dt_txt,
        iconUrl,
        cuacaDeskripsi,
        temp
      ]

      this.table_cuaca.row.add(row);
    });

    this.table_cuaca.draw(false);
  }
  );
}

  kelvinToCelcius(kelvin : any) : any {
    var celcius = kelvin - 273.15;
    celcius = Math.round(celcius * 100) / 100;
    return celcius;
  }

  ngOnInit(): void {
  }
}