import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  @Input() countries: Country[];
  @Output() inputChanged = new EventEmitter();
  @Output() reset = new EventEmitter();

  inputValue: string = '';

  setValue(e: any) {
    this.inputValue = e.currentTarget.value;
    this.inputChanged.emit(this.inputValue);
  }

  resetArray() {
    this.inputValue = '';
    this.reset.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
