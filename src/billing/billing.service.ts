import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Billing } from './entities/billing.entity';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Billing)
    private readonly billingRepository: Repository<Billing>,
    private readonly usersService: UsersService,
  ) {}

  async create(userId: string, createBillingDto: CreateBillingDto): Promise<Billing> {
    const billing = this.billingRepository.create({
      userId,
      ...createBillingDto,
    });
    
    const savedBilling = await this.billingRepository.save(billing);

    if (billing.status === 'completed') {
      await this.usersService.updateSubscription(userId, 'premium');
    }

    return savedBilling;
  }

  async findByUser(userId: string): Promise<Billing[]> {
    return this.billingRepository.find({
      where: { userId },
      order: { transactionDate: 'DESC' },
    });
  }

  async updateStatus(id: string, status: 'pending' | 'completed' | 'failed'): Promise<Billing> {
    const billing = await this.billingRepository.findOne({ 
      where: { id },
      relations: ['user'],
    });

    if (!billing) {
      throw new NotFoundException(`Billing with ID ${id} not found`);
    }

    billing.status = status;
    const updatedBilling = await this.billingRepository.save(billing);

    if (status === 'completed') {
      await this.usersService.updateSubscription(billing.userId, 'premium');
    } else if (status === 'failed') {
      await this.usersService.updateSubscription(billing.userId, 'free');
    }

    return updatedBilling;
  }
}