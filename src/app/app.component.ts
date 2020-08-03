import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Video-app';
  // vidoe id propert will control the id of the video in video-view component
  videoId = '';

  // create an empty bookmark and history array
  urlHistoryList: string[] = localStorage.getItem('historyList')
    ? JSON.parse(localStorage.getItem('historyList'))
    : [];
  urlBookmarkList: string[] = localStorage.getItem('bookmarkList')
    ? JSON.parse(localStorage.getItem('bookmarkList'))
    : [];

  // boolean property to control the disable of the bookmark button
  bookmarkExists = true;

  //boolean properties to control the navigation and the bookmark alert message
  bookmarkAlert = true;
  bookmarkNav = false;
  bookmarkMessage = 'You have ' + this.urlBookmarkList.length + ' Bookmarks';

  // removes the alert message after 2 seconds
  constructor() {
    setTimeout(() => {
      this.bookmarkAlert = false;
    }, 2000);
  }

  // updaing the vidoe Id and save to local storage when search box pressed event
  setUrl(selectedUrl: { URL: string }) {
    this.urlHistoryList.push(selectedUrl.URL);
    this.videoId = selectedUrl.URL.slice(32);
    localStorage.setItem('historyList', JSON.stringify(this.urlHistoryList));
    this.bookmarkExistsCheck(selectedUrl.URL);
  }

  // updaing the vidoe Id when catching history link pressed event

  historyUrl(link) {
    let newlink = link.slice(32);
    this.videoId = newlink;
    this.bookmarkExistsCheck(link);
  }

  // check if the video already bookmarked to control the bookmark button
  bookmarkExistsCheck(fullUrl) {
    this.bookmarkExists = this.urlBookmarkList.includes(fullUrl);
  }

  // add the url to the bookmarks on bookmark button pressed event

  bookmarkAdded(bookmarkedID) {
    let fullUrl = 'https://www.youtube.com/watch?v=' + bookmarkedID;
    this.urlBookmarkList.push(fullUrl);
    localStorage.setItem('bookmarkList', JSON.stringify(this.urlBookmarkList));
    this.bookmarkExistsCheck(fullUrl);
  }
}
