import { IsString, IsNumber, IsEnum, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBillingDto {
  @ApiProperty({ example: 'premium_monthly' })
  @IsString()
  planId: string;

  @ApiProperty({ example: 9.99 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ example: 'pending', enum: ['pending', 'completed', 'failed'] })
  @IsEnum(['pending', 'completed', 'failed'])
  status: 'pending' | 'completed' | 'failed';
}