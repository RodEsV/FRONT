import { Component } from '@angular/core';



@Component({
  selector: 'modal-comp',
  templateUrl: 'app/home/modal/modal.html',
  styleUrls: [ 'app/home/modal/modal.css' ]
})

export class ModalComponent {
  items: string[] = ['item1', 'item2', 'item3'];
    modalSelected: string;
    selected: string;
    animationsEnabled: boolean = true;

    onClose(result: ModalResult) {
        if (result === ModalResult.Close) {
            this.selected = this.modalSelected;
        }
}
  constructor() {}
}
