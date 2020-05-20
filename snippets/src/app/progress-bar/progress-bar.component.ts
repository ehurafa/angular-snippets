import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() progress: number;
  @Input() total: number;

  color: string;
  complete: boolean = false;

  constructor() { }  

  colors(): void {
    if(this.progress < 30) {
      this.color = 'red';
    } else if(this.progress < 55) {
      this.color= 'orange';   
    } else if(this.progress < 75) {
      this.color= 'yellow';
    } else if(this.progress < 100) {
      this.color= 'green';
    }
    else {
     this.color = 'blue';
    }
  }

  ngOnInit(): void {
   
    if(!this.progress) {
      this.progress = 0;
    }

    if(this.total === 0) {
      this.total = this.progress;
    } else if(!this.total) {
      this.total = 100;
    }

    if(this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }
    this.progress = (this.progress / this.total) * 100;
     
    this.colors()
 
  }
  ngOnChanges () {
    this.colors()
  }


}
