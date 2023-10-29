import { LightningElement, api, wire } from 'lwc';
import getCarById from '@salesforce/apex/CarsService.getCarById';

export default class CarsDetail extends LightningElement {

  _carId = undefined;

  set carId(value){
    
    this._carId = value;
    //console.log("Value 😱 ", this._carId);
  }

  @api get carId(){
    return this._carId;
  }

  @wire( getCarById, { carId : "$carId"}  )
  carListTo;

}