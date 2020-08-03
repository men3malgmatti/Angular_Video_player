import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() onUrl = new EventEmitter<{
    URL: string;
  }>();
  urlInputForm: FormGroup;

  constructor() {}
  // configure the input form using reactive forms
  // add validation to insure a youtube url submited
  ngOnInit() {
    this.urlInputForm = new FormGroup({
      urlInput: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+'),
      ]),
    });
  }
  // trigger an event when on submit button
  onSubmit() {
    this.onUrl.emit({
      URL: this.urlInputForm.value.urlInput,
    });
  }
}
