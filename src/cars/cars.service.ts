import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Ford',
      model: 'Fiesta',
      year: 2019,
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Mustang',
      year: 2017,
    },
    {
      id: 3,
      brand: 'Mazda',
      model: 'CX3',
      year: 2020,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    return this.cars.find((car) => car.id === Number(id));
  }
}
