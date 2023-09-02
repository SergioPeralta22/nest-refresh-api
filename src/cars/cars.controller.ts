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

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOne(id);
  }
  // cars/
  @Post()
  createCar(@Body() body) {
    return this.carsService.create(body);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return this.carsService.update(id, body);
  }
}
