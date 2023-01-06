import { Component,Renderer2,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements AfterViewInit {
  data:any;
  table_forex: any;

  constructor(private http: HttpClient, private renderer :Renderer2){}

  ngAfterViewInit(): void {

    this.renderer.removeClass(document.body,"sidebar-open");
    this.renderer.addClass(document.body,"sidebar-closed");

    this.table_forex = $("#table_forex").DataTable(
      {
        "colomnDefs":
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );

    this.getData                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ();
  }
  getData(): void{
    console.log("getData()");
    var url = "https://openexchangerates.org/api/latest.json?app_id=852516a43f8745f590f92a63c8ba86db";

    this.http.get(url)
    .subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US","","USD");
      console.log("USD : " + idr2);
      var row = [1, "USD", idr2];
      this.table_forex.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US","","SGD");
      console.log("SGD : " + sgd2);
      var row = [2, "SGD", sgd2];
      this.table_forex.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US","","BND");
      console.log("BNB : " + bnd2);
      var row = [3, "BNB", bnd2];
      this.table_forex.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(sgd, "en-US","","HKD");
      console.log("HKD : " + hkd2);
      var row = [4, "HKD", hkd2];
      this.table_forex.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US","","BTC");
      console.log("BTC : " + btc2);
      var row = [5, "BTC", btc2];
      this.table_forex.row.add(row);

      var aed = rates.IDR / rates.AED;
      var aed2 = formatCurrency(aed, "en-US","","AED");
      console.log("AED : " + aed2);
      var row = [6, "AED", aed2];
      this.table_forex.row.add(row);

      var afn = rates.IDR / rates.AFN;
      var afn2 = formatCurrency(afn, "en-US","","AFN");
      console.log("AFN : " + afn2);
      var row = [7, "AFN", afn2];
      this.table_forex.row.add(row);

      var all = rates.IDR / rates.ALL;
      var all2 = formatCurrency(all, "en-US","","ALL");
      console.log("ALL : " + all2);
      var row = [8, "ALL", all2];
      this.table_forex.row.add(row);

      var amd = rates.IDR / rates.AMD;
      var amd2 = formatCurrency(amd, "en-US","","AMD");
      console.log("AMD : " + amd2);
      var row = [9, "AMD", amd2];
      this.table_forex.row.add(row);

      var ang = rates.IDR / rates.ANG;
      var ang2 = formatCurrency(ang, "en-US","","ANG");
      console.log("ANG : " + ang2);
      var row = [10, "ANG", ang2];
      this.table_forex.row.add(row);
      
      this.table_forex.draw(false);
    });
  }
}
