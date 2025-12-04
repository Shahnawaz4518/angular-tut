import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { StyleRules } from './style-rules/style-rules';


@Component({
  selector: 'app-root',
  imports: [Login,Signup,Profile,StyleRules],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Developer');
  protected readonly name= signal('Java Developer');

  handelClickEvent(){
    console.log("function called");
    this.otherFunction();
  }
  otherFunction(){
    console.log("other function");
  }

  myname:string="Shahnawaz Khan"
  data:string|number="Hello"
  other:any=true;
  updateName(){

    this.myname="Shahnawaz";
    this.data=123

    this.other=30

    this.other={}
  }
  updateVar(){
    let x=30;
    console.log(x);
    this.sum(10,20);

  }
  sum(a:number,b:number){
     console.log(a+b);
  }



//Counter App Code

  count=0

/*
  handelIncrement(){
    this.count=this.count+1;
  }
  handelDecrement(){
    this.count=this.count-1;
  }
  handelReset(){
    this.count=0;
  }
*/


  handelCounter(val : string) {
    if(val=="minus"){
      if (this.count > 0) { 
      this.count=this.count-1;
      }
    }else if(val=="plus"){
      this.count=this.count+1;
    }else{
      this.count=0;
    }

  }


//Event In Angular
handelEvent(event:Event) {
  console.log("function called",event.type);
  console.log("value",(event.target as HTMLInputElement).value);
}

//Get and Set Input Field Value
mynname = "";
displayName = "";
email=""

getName(event: Event) {
  this.mynname = (event.target as HTMLInputElement).value;
}

showName() {
  this.displayName = this.mynname;
}

setName() {
  this.mynname = "Sam";
}
getEmail(val:string){
   console.log(val);
   this.email=val;
} 
setEmail(){
  this.email="default@test.com"
}

//If Else | Control Flow

display=true;
x=3;
toggleDiv=true;

hide(){
  this.display=false;
}
show(){
  this.display=true;
}
toggle(){
  this.display=!this.display;
}
toggleTwo(){
  this.toggleDiv=!this.toggleDiv;
}

//Else-If Condition | Control Flow
color=1;

handelColor(val:number){
  this.color=val;
}

handelInput(event:Event){
  this.color=parseInt((event.target as HTMLInputElement).value)
}

//Switch Case In Angular 19
colorr='red';
handelcolorr(val:string){
  this.colorr=val;
}
changecolor(event:Event){
  this.colorr=(event.target as HTMLInputElement).value
}

//For Loop In Template File
  users = ["Anil", "Sunil", "Sam", "John"];

  students = [
    { name: 'Anil', age: 20, email: 'anil@test.com' },
    { name: 'Sunil', age: 22, email: 'sunil@test.com' },
    { name: 'Sam', age: 21, email: 'sam@test.com' },
    { name: 'John', age: 23, email: 'john@test.com' }
  ];

  getNamee(name: string) {
    console.log(name);
  }

    
// Signal
countt=signal(10);
s=20

  constructor() {
    effect(() => {
      console.log(this.countt());  
    });
  }
updateValue(val:string){
// this.countt.set(this.countt()+1);
 //this.s=this.s+1;
 if (val === "inc") {
    this.countt.set(this.countt() + 1);  // increase
  } else {
    this.countt.set(this.countt() - 1);  // decrease
  }
 }
}

