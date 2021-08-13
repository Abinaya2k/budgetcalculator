import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/budget.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  budgetitem:BudgetItem[]=new Array<BudgetItem>();
  totalbudget:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  additem(newitem:BudgetItem){
    this.budgetitem.push(newitem);
    this.totalbudget+=newitem.amount;

  }
  deleteItem(item:BudgetItem){
    let index=this.budgetitem.indexOf(item);
    this.budgetitem.splice(index,1);
    this.totalbudget-=item.amount;



  }

}
