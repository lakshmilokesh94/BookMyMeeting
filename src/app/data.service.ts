import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  rooms: any = [
    {
      id: '1', name: 'Room-1', status: 'Available', scheduledMeetings: []
    },
    {
      id: '2', name: 'Room-2', status: 'Available', scheduledMeetings: []
    },
    {
      id: '3', name: 'Room-3', status: 'Available', scheduledMeetings: []
    },
    {
      id: '4', name: 'Room-4', status: 'Available', scheduledMeetings: []
    },
    {
      id: '5', name: 'Room-5', status: 'Available', scheduledMeetings: []
    },
    {
      id: '6', name: 'Room-6', status: 'Available', scheduledMeetings: []
    },
    {
      id: '7', name: 'Room-7', status: 'Available', scheduledMeetings: []
    },
    {
      id: '8', name: 'Room-8', status: 'Available', scheduledMeetings: []
    },
    {
      id: '9', name: 'Room-9', status: 'Available', scheduledMeetings: []
    },
    {
      id: '10', name: 'Room-10', status: 'Available', scheduledMeetings: []
    }
  ]

  constructor() {


  }

  getAllRooms() {
    return this.rooms;
  }

  getRoomDetails(roomId: string) {
    let currentRoom = this.rooms.filter(room => { return room.id === roomId; });
    currentRoom = currentRoom.length ? currentRoom[0] : {};
    return JSON.parse(JSON.stringify(currentRoom));
  }

  private isValid(meetingDetails: any) {
    let startTime = new Date(meetingDetails.startTime);
    let endTime = new Date(meetingDetails.endTime);
    return startTime < endTime;

  }

  scheduleMeeting(roomId: string, meetingDetails: any) {
    meetingDetails = JSON.parse(JSON.stringify(meetingDetails));
    //meetingdetails has id, username ,date, time to and fro, agenda
    if (this.isValid(meetingDetails)) {
      let index = this.rooms.findIndex(p => p.id === roomId);
      meetingDetails.id = this.rooms[index].scheduledMeetings.length + 1;
      this.rooms[index].scheduledMeetings.push(meetingDetails);
    }
  }

  getRoomStatus(roomId: string, time: string) {
    let selectedTime = new Date(time);
    let index = this.rooms.findIndex(p => p.id === roomId);
    let meeting = this.rooms[index].scheduledMeetings.filter(meeting => {
      let startTime = new Date(meeting.startTime);
      let endTime = new Date(meeting.endTime);
      return startTime <= selectedTime && selectedTime <= endTime;
    });
    return meeting && meeting.length ? 'Booked' : 'Available';
  }

  deleteMeeting(roomId: string, meetingId: string) {
    let index = this.rooms.findIndex(p => p.id === roomId);
    let meetingIndex = this.rooms[index].scheduledMeetings.findIndex(i => i.id === meetingId);
    this.rooms[index].scheduledMeetings.splice(meetingIndex,1);
  }
}
