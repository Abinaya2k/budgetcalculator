import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/budget.model';


@Component({
  selector: 'app-additemform',
  templateUrl: './additemform.component.html',
  styleUrls: ['./additemform.component.scss']
})
export class AdditemformComponent implements OnInit {

  @Input() item:BudgetItem=new BudgetItem('',null);
  @Output() formsubmit:EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(form:NgForm){
    this.formsubmit.emit(form.value);
    form.reset();

  }

}
