import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rooms:any = [];
  constructor(public dataSvc: DataService,public router: Router) { }

  goToRoom(roomId: string) {
    this.router.navigate(['/room',{ id: roomId }]);
  }
  ngOnInit() {
    this.rooms = this.dataSvc.getAllRooms();
  }

}
