import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [{text: 'Hi. Are you there?', owner: 'Kiran Dash'}, {text: 'You are very rich!', owner: 'Bholanath Dash'}];
  constructor() { }

  ngOnInit() {
  }

}
