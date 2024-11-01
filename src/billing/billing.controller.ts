import { Controller, Get, Post, Body, Param, Put, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';

@ApiTags('billing')
@Controller('billing')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  async create(@Request() req, @Body() createBillingDto: CreateBillingDto) {
    return this.billingService.create(req.user.id, createBillingDto);
  }

  @Get('history')
  async findByUser(@Request() req) {
    return this.billingService.findByUser(req.user.id);
  }

  @Put(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: 'pending' | 'completed' | 'failed',
  ) {
    return this.billingService.updateStatus(id, status);
  }
}