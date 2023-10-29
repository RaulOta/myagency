import { LightningElement, api } from 'lwc';

export default class CarsTile extends LightningElement {

  @api car;

  tileClick(event){

    event.preventDefault();

    const selectedEvent = new CustomEvent("tileclick", {detail: this.car.Id});

    this.dispatchEvent(selectedEvent);
  }
}