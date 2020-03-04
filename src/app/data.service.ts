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
    return currentRoom.length ? currentRoom[0] : {};
  }

  private isAvailable(roomId: string, meetingDetails: any) {
    return true;
  }

  scheduleMeeting(roomId: string, meetingDetails: any) {
    //meetingdetails has id, username ,date, time to and fro, agenda
    if (this.isAvailable(roomId, meetingDetails)) {
      let index = this.rooms.findIndex(p => p.id === roomId);
      meetingDetails.id = this.rooms[index].scheduledMeetings.length + 1;
      this.rooms[index].scheduledMeetings.push(meetingDetails);
    }
  }

  changeStatus(roomId: string, meetingDetails: any) {

  }

  deleteMeeting(roomId: string, meetingId: string) {

  }
}
