import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/budget.model';

@Component({
  selector: 'app-budgetitemcard',
  templateUrl: './budgetitemcard.component.html',
  styleUrls: ['./budgetitemcard.component.scss']
})
export class BudgetitemcardComponent implements OnInit {
  @Input() item:BudgetItem;
  @Output() xbuttonclick:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onxbuttonclick(){
    this.xbuttonclick.emit();

  }

}
