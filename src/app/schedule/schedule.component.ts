import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(public dataService: DataService, public currentRoute: ActivatedRoute) { }

  roomDetails: any;
  meetingDetails: any = { id: '',startTime: '', endTime: '', agenda:'', bookedBy:''}
  ngOnInit() {
    this.currentRoute.params.subscribe(p => {
      this.roomDetails = this.dataService.getRoomDetails(p.id);
    });
  }

  scheduleMeeting() {
    this.dataService.scheduleMeeting(this.roomDetails.id, this.meetingDetails)
  }

}
