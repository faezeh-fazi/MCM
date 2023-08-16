import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css'],
  
})
export class ContactSellerComponent implements OnInit {
 @Input() name: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
