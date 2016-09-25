import { Directive, Input, OnInit  } from '@angular/core';

@Directive({
	selector: '[ngInit]'
})

export class LoginDirective implements OnInit { 
	@Input() ngInit;
	ngOnInit(){
		if(this.ngInit) {
			this.ngInit();
		}
	}
}