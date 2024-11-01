import { IsString, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaybackDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString()
  assetId: string;

  @ApiProperty({ example: 120.5 })
  @IsNumber()
  @Min(0)
  progress: number;
}