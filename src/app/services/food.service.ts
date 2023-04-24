import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return [
      '/assets/pizza1.jpg',
      '/assets/pizza2.jpg',
      '/assets/pizza3.jpg',
      '/assets/garlicbread1.jpg'
  ]
  }
}

