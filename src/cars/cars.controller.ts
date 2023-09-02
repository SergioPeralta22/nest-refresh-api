import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }
  // cars/
  @Post()
  createCar(@Body() createCar: CreateCarDto) {
    return this.carsService.create(createCar);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: Car) {
    return this.carsService.update(id, body);
  }
}
