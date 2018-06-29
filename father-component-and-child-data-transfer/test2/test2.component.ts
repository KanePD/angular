import { Component, OnInit,EventEmitter } from '@angular/core';
import {EmitserviceService} from '../emitservice.service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  constructor(private emitter:EmitserviceService) {}
  ngOnInit() {
  }
	onTest(value:string){
		this.emitter.emitter.emit(value);
	}
}
//import { Input,Output } from '@angular/core';
　//@Input()
	// data_from_parent:string;
//this.data_from_parent = "default";