import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/budget.model';

@Component({
  selector: 'app-budgetitemlist',
  templateUrl: './budgetitemlist.component.html',
  styleUrls: ['./budgetitemlist.component.scss']
})
export class BudgetitemlistComponent implements OnInit {

  @Input()budgetitem:BudgetItem[];
  @Output() deleteitem:EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(item:BudgetItem){
    this.deleteitem.emit(item);

  }

}
