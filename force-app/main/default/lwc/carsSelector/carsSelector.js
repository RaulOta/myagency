import { LightningElement } from 'lwc';

export default class CarsSelector extends LightningElement {

  carSelectedToDetail;

  handleCarSelect(event){
    console.log("Name from car ", event.detail);
    this.carSelectedToDetail = event.detail;
  }

}