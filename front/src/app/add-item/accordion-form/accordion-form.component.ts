import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddItemService } from './add-item.service';

@Component({
  selector: 'app-accordion-form',
  templateUrl: './accordion-form.component.html',
  styleUrls: ['./accordion-form.component.css']
})
export class AccordionFormComponent implements OnInit {

  @Input() index:number;
  @Input() id: number;
  @Input() createOrUpdate: string;
  @Input() references: any;
  @Output() panel = new EventEmitter<any>();
  description: any;
  name: any;
  url: any;
  categoryArray: any[] = [];
  reference: any;

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
  }

  // On Changes, display new values into form
  ngOnChanges() {
    this.id = this.references.id;
    this.url = this.references.url;
    this.name = this.references.name;
    this.description = this.references.description;
  }

  //get categories from add-category whenever the overlay is closed
  getCategories(event) {
    this.categoryArray = event;
  }

  // subscription of the post method to add a new reference
  addReferences(reference) {
    this.addItemService.sendReferences(reference)
      .subscribe(
        (ref: any) => {
          console.log('Request sendReferences successful', ref);
          //this.id = ref.id;
          this.name = ref.name;
          this.url = ref.url;
          this.description = ref.description;
        },
        (error) => {
          console.log('ERROR', error);
        });
  }

  // subscription of the put request from the service when updating a reference
  updateReference(reference) {
    this.addItemService.updateReference(reference)
      .subscribe(
        (ref: any) => {
          console.log('Request updateReference successful', ref);
        },
        (error) => {
          console.log('ERROR', error);
        }
      )
  }

  // Action to perform when submitting the form (e.g. a new reference)
  onSubmit(form: NgForm) {
    this.reference = { id: this.id, name: form.value.name, url: form.value.url, description: form.value.description, category: this.categoryArray };
    this.panel.emit(this.reference);

    if (form.form.dirty && this.createOrUpdate == 'Create Reference') {
      this.addReferences(this.reference);
    } else if (form.form.dirty && this.createOrUpdate == 'Update Reference') {
      this.updateReference(this.reference);
    }

    this.createOrUpdate = 'Update Reference';
    form.form.markAsPristine;
  }
}
