import { LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/CarsService.getCars';

export default class CarsList extends LightningElement {
  // carList = [
  //   {
  //     Id: 1,
  //     Name:"RAV4",
  //     Color: "black",
  //     Price: 600000,
  //     URL: "https://www.toyota.mx/sites/default/files/modelos/galeria/03_6_0.jpg"
  //   },
  //   {
  //     Id: 2,
  //     Name:"mazda 3",
  //     Color: "white",
  //     Price: 350000,
  //     URL: "https://www.toyota.mx/sites/default/files/modelos/galeria/03_6_0.jpg"
  //   }
  // ];

  @wire(getCars)
  carList;

  handleTileClick(event){

    //console.log("Click on Tile 😱 to Car: ", event.detail);
    const carSelected = new CustomEvent("carselected", { detail: event.detail });

    this.dispatchEvent(carSelected);
  }
}