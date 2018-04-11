import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	//can add functions and helper methods here//
	allowNewServer = false;
	serverCreationStatus = 'No server was created!'
	serverName = 'TestServer';
	serverCreated = false;

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit() {
	}

	onCreateServer(){
		this.serverCreationStatus = 'Server was created! The Name of the Server is:' + this.serverName;
		this.serverCreated = true;
	}
	onUpdateServerName(event: Event){
		this.serverName = (<HTMLInputElement>event.target).value;
	}

}
