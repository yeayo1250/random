import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bettor',
  templateUrl: './bettor.component.html',
  styleUrls: ['./bettor.component.css']
})
export class BettorComponent {
  num:number=0;
  rnd=0;
  be(){
      this.rnd+=Math.floor(Math.random() * 10);
      this.num=this.rnd;

  }
  bet(){
    this.rnd-=Math.floor(Math.random() * 10);
      this.num=this.rnd;
  }
}
