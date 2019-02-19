import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // TODO get something from the graphql endpoint with apollo
  }
}
