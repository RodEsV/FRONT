import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'modal-comp',
  templateUrl: 'app/home/modal/modal.html',
  styleUrls: [ 'app/home/modal/modal.css' ]
})

export class ModalComponentKioka {
  @ViewChild('modal')
    modal: ModalComponent;
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

    closed() {
        console.log("closed");
    }

    dismissed() {
        console.log("dismissed");
    }

    opened() {
        console.log("opened");
    }

    open() {
        this.modal.open();
    }
}
