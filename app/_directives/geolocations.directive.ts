import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

declare var google: any;

@Directive({
  selector: '[Googleplace]',
  providers: [NgModel],
  host: {
    '(input)': 'onInputChange()'
  }
})
export class GeolocationsDirective {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  modelValue: any;
  autocomplete: any;
  private _el: HTMLElement;


  constructor(el: ElementRef, private model: NgModel) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
    var input = this._el;

    //console.log(google.maps.places);

    this.autocomplete = new google.maps.places.Autocomplete(input, {});
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      var place = this.autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    console.log(place);
    this.setAddress.emit(place);
  }

  onInputChange() {
    console.log('1');
    console.log(this.model);
  }
}
