import { Component, OnInit } from '@angular/core';
import {EmitserviceService} from '../emitservice.service';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
	data_from_child:string;
  constructor(private emitter:EmitserviceService) {}
  ngOnInit() {
		this.emitter.emitter.subscribe((data)=>{
			console.log(data);
			this.data_from_child = data;
		});
  }
}

