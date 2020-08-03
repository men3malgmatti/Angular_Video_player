import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @Input() urlList: string;
  @Output() onHistoryLink = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // trigger an event when History link is pressed
  onHistory(link) {
    this.onHistoryLink.emit(link.target.innerText);
  }
}
