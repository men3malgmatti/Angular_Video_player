import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-vidoe-view',
  templateUrl: './vidoe-view.component.html',
  styleUrls: ['./vidoe-view.component.css'],
})
export class VidoeViewComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Output() onBookmark = new EventEmitter<{}>();
  @Input() disabled: Boolean;

  // on component init add the youtube api script
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  //detect the vidoe Id changes
  ngOnChanges(changes: SimpleChanges) {}

  //trigger an event bookmark the url when bookmark button pressed
  bookmarkUrl() {
    this.onBookmark.emit(this.id);
  }
}
