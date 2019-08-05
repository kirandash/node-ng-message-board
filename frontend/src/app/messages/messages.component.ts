import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [{text: 'Hi. Are you there?', owner: 'Kiran Dash'}, {text: 'You are very rich!', owner: 'Bholanath Dash'}];
  constructor(private webService: WebService) {
    // Making service calls here is not recommended since it might delay our app and hold loading the content until the data from service is called. Thus better to call services in ngOnInit which is called after component is initialized.
    // Put only light coding like var declaration etc here
  }

  ngOnInit() {
    // Add all service calls etc here
    this.webService.getMessages();
  }

}
