import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
		  <h1>Hello {{name}}</h1>
			<h2>your mail is: {{email}}</h2>
			<p>{{address.street}} {{address.city}} {{address.state}}</p>
			<button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
			<div *ngIf="showHobbies">
				<h3>Hobbies</h3>
				<ul>
					<li *ngFor="let hobby of hobbies; let i = index">
						{{hobby}} <button (click)="deleteHobby(i)">X</button>
					</li>
				</ul>
				<form (submit)="addHobby(hobby.value)">
					<label for="hobby">add hobby:</label><br />
					<input type="text" #hobby /><br />
				</form>
			</div>
			<hr />
			<form>
				<label for="name">Name:</label><br />
				<input type="text" name="name" [(ngModel)]="name"/><br />
				<label for="email">email:</label><br />
				<input type="email" name="email" [(ngModel)]="email"/><br />
				<label for="city">city:</label><br />
				<input type="text" name="city" [(ngModel)]="address.city"/><br />
				<label for="state">state:</label><br />
				<input type="text" name="state" [(ngModel)]="address.state"/><br />
			</form>
			`
})



export class UserComponent { 
	
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	hobby: string;
	showHobbies: boolean;

	constructor(){
		console.log('contructor running');
		this.name = 'Chrissy'; 
		this.email = "test@test.com";
		this.address = {
				street : "12 main street",
				city: 'boston',
				state: 'MA'
		}
		this.hobbies = ['Music', 'Movies', 'Sports'];
		this.showHobbies = false;
	}

	toggleHobbies(){
		this.showHobbies = !this.showHobbies;
	}

	addHobby(hobby){
		console.log(hobby);
		this.hobbies.push(hobby);
		this.hobby = '';
	}

	deleteHobby(i){
		this.hobbies.splice(i,1);
	}
}


interface adsdress {
	street: string;
	city: string;
	state: string;
}