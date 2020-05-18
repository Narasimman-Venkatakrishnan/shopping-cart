export class Vehicle {
  _id: number;
  make: string;
  model: string;
  year_model: number;
  price: number;
  licensed: boolean;
  date_added: string;
  imageUrl?: string;
  constructor(_id: number, make: string, model: string, year_model: number, price: number, licensed: boolean, date_added: string, imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
  this._id = _id;
  this.make = make;
  this.model = model;
  this.year_model = year_model;
  this.price = price;
  this.licensed = licensed;
  this.date_added = date_added;
  this.imageUrl = imageUrl;
 }
}
