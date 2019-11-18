import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../event.model';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  breakpoint: number;

  @Input() event: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {}

  onApply() {
    this.eventService.applyEvent(this.event.id);
  }

}