import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat: number = 14.635819;
  lng: number = 107.847747;
  constructor() { }

  ngOnInit() {
  }

}
