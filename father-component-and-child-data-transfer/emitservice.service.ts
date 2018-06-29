import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitserviceService {
	public emitter:any;
	constructor() { 
		this.emitter = new EventEmitter ; 
	}
}
