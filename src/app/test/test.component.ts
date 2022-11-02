import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template:`
  <h2>{{"Hello " + parentData}}</h2>  <!--@input()-->
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData:any; //parent to child comp interaction (display in child)
  @Output() public childEvent = new EventEmitter(); //child to parent comp interaction
  fireEvent() {
    this.childEvent.emit("Hello from child component");
  }


  public name = "Gaurav";
  public message = "nothing here come back later !";
  public myId = "testId";
  public successClass = "text-success";
  public hasError = false;
  public greeting = "";
  public count = 0;
  public con = false;

  public color = "blue";
  public fruits = ["apple","orange","mango","grapes"];
  
  public date = new Date();

  public styleObj = {
    color : "red",
    fontStyle : "italic"
  }
  onClick() {
    console.log("Welcome to here");
    this.greeting = "Hello There";
  }

  logMsg(value:string) {
    window.alert(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
