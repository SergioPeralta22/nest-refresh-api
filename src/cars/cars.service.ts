import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  create(car: Car) {
    const newCar = {
      id: this.cars.length + 1,
      ...car,
    };

    this.cars.push(newCar);
    return newCar;
  }

  update(id: number, car: Car) {
    const existingCar = this.findOne(id);
    if (existingCar) {
      const index = this.cars.findIndex((car) => car.id === id);
      this.cars[index] = { ...existingCar, ...car };
      return this.cars[index];
    }
  }
}
