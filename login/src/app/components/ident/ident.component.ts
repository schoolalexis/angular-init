import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ident',
  templateUrl: './ident.component.html',
  styleUrls: ['./ident.component.css']
})


export class IdentComponent implements OnInit {

  identForm! : FormGroup;
  isSubmitted = false;
  badLogin = false;
  badPasse = false;
  @Output()  leLogin = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    this.identForm = new FormGroup({
      login: new FormControl(),
      passe: new FormControl(),
    });
  }

  get formControls() { return this.identForm.controls; }

  authentification() {
    this.isSubmitted = true;
    console.log("ident (login):" + this.identForm.value.login);
    console.log("ident (passe):" + this.identForm.value.passe);

    if(this.identForm.value.login == '') {
      this.badLogin = true;
      return;
    } else {
      this.leLogin.emit(this.identForm.value.login);
    }

    if(this.identForm.value.passe.length < 3) {
      this.badPasse = true;
      return;
    }
  }

}