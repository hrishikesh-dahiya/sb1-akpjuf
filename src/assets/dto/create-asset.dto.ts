import { IsString, IsEnum, IsUrl, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssetDto {
  @ApiProperty({ example: 'Introduction to NestJS' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Learn the basics of NestJS framework' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'video', enum: ['video', 'preview', 'thumbnail'] })
  @IsEnum(['video', 'preview', 'thumbnail'])
  type: 'video' | 'preview' | 'thumbnail';

  @ApiProperty({ example: 'https://storage.example.com/video.mp4' })
  @IsUrl()
  url: string;

  @ApiProperty({ example: 120.5, required: false })
  @IsOptional()
  @IsNumber()
  duration?: number;

  @ApiProperty({ 
    example: { 
      resolution: '1920x1080',
      bitrate: '5000kbps'
    },
    required: false 
  })
  @IsOptional()
  metadata?: Record<string, any>;
}