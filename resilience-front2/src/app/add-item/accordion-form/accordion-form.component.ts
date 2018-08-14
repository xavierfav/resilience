import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddItemService } from './add-item.service';
import { map } from 'rxjs/operators';
import { ReferencesImpl } from '../../shared/ReferencesImpl.model';
import { References } from '../../shared/references.model';

@Component({
  selector: 'app-accordion-form',
  templateUrl: './accordion-form.component.html',
  styleUrls: ['./accordion-form.component.css']
})
export class AccordionFormComponent implements OnInit {

  @Input() index:number;
  @Input() id: number;
  @Input() createOrUpdate: string;
  description: any;
  name: any;
  url: any;
  @Output() panel = new EventEmitter<any>();
  @Output() submit = new EventEmitter<boolean>()
  isSubmitted: boolean = false;
  reference: any;
  @Input() references: any;
  uniqueReference;
  idRef: number;
  title: any;
  categoryArray: any[] = [];

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
     console.log(this.references);
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
    console.log(this.categoryArray);
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

  updateReference(reference) {
    console.log(reference);
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
    console.log('form value when submitting', form.value, this.id);
    this.reference = { id: this.id, name: form.value.name, url: form.value.url, description: form.value.description, category: this.categoryArray };
    console.log(this.reference);
    this.panel.emit(this.reference);
    this.submit.emit(!this.isSubmitted);

    if (form.form.dirty && this.createOrUpdate == 'Create Reference') {
      this.addReferences(this.reference);
    } else if (form.form.dirty && this.createOrUpdate == 'Update Reference') {
      this.updateReference(this.reference);
    }

    this.createOrUpdate = 'Update Reference';
    form.form.markAsPristine;
    this.isSubmitted = true;
  }
}
