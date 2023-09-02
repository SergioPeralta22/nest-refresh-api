import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }
  // cars/
  @Post()
  createCar(@Body() body: Car) {
    return this.carsService.create(body);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: string, @Body() body: Car) {
    return this.carsService.update(id, body);
  }
}
