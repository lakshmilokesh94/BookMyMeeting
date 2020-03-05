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
  rooms: any = [];
  roomDetails: any = {};
  status: string = '';
  meetingDetails: any = { id: '', startTime: '', endTime: '', agenda: '', bookedBy: '' }
  ngOnInit() {
    this.rooms = this.dataService.getAllRooms();
  }

  onRoomChange(roomId) {
    this.roomDetails = this.dataService.getRoomDetails(roomId);
    this.status = this.dataService.getRoomStatus(roomId,this.meetingDetails.startTime);
  }

  onTimeChange(time) {
    this.status = this.dataService.getRoomStatus(this.roomDetails.id,time);
  }

  scheduleMeeting(theForm) {
    if(this.status === 'Available'){
      this.dataService.scheduleMeeting(this.roomDetails.id, this.meetingDetails);
      theForm.reset();
      this.roomDetails = this.dataService.getRoomDetails(this.roomDetails.id);
    }
  }

  deleteMeeting(meetingId:string){
    this.dataService.deleteMeeting(this.roomDetails.id,meetingId);
    this.roomDetails = this.dataService.getRoomDetails(this.roomDetails.id);
    this.status = this.dataService.getRoomStatus(this.roomDetails.id,this.meetingDetails.startTime);
  }

}
