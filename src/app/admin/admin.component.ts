import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GetMenuService } from '../get-menu.service';
import { OrdersService } from '../orders.service';
import { AuthAPIService } from '../auth.api.service';
import { CartDataService } from '../cart-data.service';
import { ChartConfiguration } from 'chart.js';

interface purSpl {
  [_: string]: number[],
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  content = 'stats';
  allOrders: any;
  view: number = 1;
  menu: any;
  purchaseSplit = {} as purSpl;
  menuLabels: string[] = [];
  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [0, 0];
  data4: number[] = [0, 0];

  barChartData1: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  barChartData2: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  pieChart1: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: []
  };

  doughnutChart1: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: []
  }

  doughnutOptions: ChartConfiguration<'doughnut'>['options'] = {
    animation: false
  }

  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    animation: false
  }

  pushMenu(data: any) {
    this.menuService.pushMenu(data);
    this.menuService.fetch().subscribe(data => {
      this.menu = data
    });
  }


  ngOnInit(): void {}

  constructor(public menuService: GetMenuService, public ordersService: OrdersService,
    public _auth: AuthAPIService, public cartService: CartDataService) {
      
    forkJoin([
      this.menuService.fetch(),
      this.ordersService.getOrders()
    ]).subscribe(([menu, allOrders]) => {
      this.menu = menu;
      this.allOrders = allOrders;
      this.parsePlotData();
    });
  }

  parsePlotData() {
    for (let item of this.menu) {
      this.purchaseSplit[item.item] = [0, 0];
    }

    for (var orderID in this.allOrders) {
      for (let item of this.allOrders[orderID]) {
        if (item.isNonVeg) {
          this.data3[1] += item.qty;
          this.data4[1] += (item.unit * item.qty);
        } else {
          this.data3[0] += item.qty;
          this.data4[0] += (item.unit * item.qty);
        }
        this.purchaseSplit[item.item][0] += item.qty;
        this.purchaseSplit[item.item][1] += (item.unit * item.qty);
      }
    }

    for (let name in this.purchaseSplit) {
      this.menuLabels.push(name);
      this.data1.push(this.purchaseSplit[name][0]);
      this.data2.push(this.purchaseSplit[name][1]);
    }
    
    this.barChartData1 = {
      labels: this.menuLabels,
      datasets: [
        { data: this.data1, label: 'Quantity Sales (showing Fig in Quantity Sold)' }
      ]
    };

    this.barChartData2 = {
      labels: this.menuLabels,
      datasets: [
        { data: this.data2, label: 'Sales Revenue (showing Fig in ₹)' }
      ]
    };

    this.pieChart1 = {
      labels: ['Quantity Veg Sold', 'Quantity Non Veg Sold'],
      datasets: [
        { data: this.data3 },
      ]
    }

    this.doughnutChart1 = {
      labels: ['Veg Sales in ₹', 'Non-Veg Sales in ₹'],
      datasets: [
        { data: this.data4 }
      ]
    }
  }

}
