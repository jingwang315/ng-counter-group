import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: {num: number}[] = [
    {num: 1},
    {num: 2},
    {num: 3}
  ]

  get sum(){
    return this.counters.reduce(
      (result, current) => result + current.num,
      0)   /*这里0是reduce的初始值*/
      /* result是用于迭代计数的变量*/
  }

  onAdd(){
    this.counters.push({num: 0})
  }

  onResetAll(){
    this.counters.forEach(element => {
      element.num = 0
    })
  }

  onDelete(index:number){
    this.counters.splice(index, 1);
  }


}
