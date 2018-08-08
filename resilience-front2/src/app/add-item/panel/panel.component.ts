import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() index: number;
  @Input() id: number;
  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }
}
