import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
// @Component({
//   selector: '.app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss']
// })
// @Component({
//   selector: '[app-test]',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss']
// })
export class TestComponent {
  public name = "Mujtaba"; //sending this name to the parent component
  public url = window.location.href;
  public id="testid";
  public isDisabled = true;
  public successClass = "text-success text-special";
  public hasError = true;
  public isSpeacial = true;
  public greet = "";
  public userName = "";
  public displayName = true;
  public color = "green";
  public colors = ["red", "blue", "green"];
  public manageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpeacial,
  }
  public styleClasses = {
    color: "blue",
    fontStyle: "italic",
    fontWeight: "bold",
  }
  onClick(event:any){
    console.log(event);
    
    this.greet = "Welcome " + this.name + " Event Type " + event.type;
  }
  showUserName(value : string){
    console.log("Username " + value);
  }
  greetUser(){
    return "Hello " + this.name;
  }
  @Input() public parentData : any;
  //for giving alias @Input('parentData') public parentName : any;
  @Output() public childEvent = new EventEmitter();
  sendData(){
    this.childEvent.emit("Child Component Name "+this.name);
  }
  public message = "welcome to the test component";
  public person = {
    firstName : "Zeus",
    lastName : "Taurus",
    age : 25
  }
  public date = new Date();
}
