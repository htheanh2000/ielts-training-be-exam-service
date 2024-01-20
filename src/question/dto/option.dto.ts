// src/dtos/option.dto.ts

import { IsNotEmpty, IsString, IsBoolean, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OptionDto {
  @ApiProperty({ description: 'Text of the option', example: '4' })
  @IsNotEmpty()
  @IsString()
  readonly optionText: string;

  @ApiProperty({ description: 'Indicates if the option is the correct answer', example: true })
  @IsNotEmpty()
  @IsBoolean()
  readonly isCorrect: boolean;
}
