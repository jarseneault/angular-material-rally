import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() content: string;

  constructor() {}

  ngOnInit() {}
}
