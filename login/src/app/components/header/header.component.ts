import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() login!: string;
  constructor() { }
  ngOnInit(): void {
  }
  
  getConnect() {
    return this.login != '';
  }
}
