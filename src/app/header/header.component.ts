import { Component,EventEmitter,Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl : './header.component.html'
})
export class HeaderComponent
{
	@Output() featureSelected = new EventEmitter<String>();
	onSelect(menu_type: String)
	{
		this.featureSelected.emit(menu_type);
	}
}