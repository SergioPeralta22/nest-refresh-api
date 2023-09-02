import { Injectable, NotFoundException } from '@nestjs/common';

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

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }
}
