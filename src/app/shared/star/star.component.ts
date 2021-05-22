import { Component, OnChanges, OnInit , Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'product-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges{

  constructor() { }
  @Input() rating:number;
  starWidth:number

  @Output() notify:EventEmitter<string> = new EventEmitter<string>()

  onRatingClicked():void{
    this.notify.emit(`rating is ${this.rating}`)
  }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.starWidth = this.rating * (75 / 5);
  }

}
