import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  readonly make: string;

  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @IsNumber()
  @IsNotEmpty()
  readonly year: number;
}
