import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return [
      {
        brand: 'Ford',
        model: 'Fiesta',
        year: 2019,
      },
      {
        brand: 'Ford',
        model: 'Mustang',
        year: 2017,
      },
      {
        brand: 'Mazda',
        model: 'CX3',
        year: 2020,
      },
    ];
  }
}
