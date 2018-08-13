import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
