import { Repository } from 'typeorm';
import { Billing } from './entities/billing.entity';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UsersService } from '../users/users.service';
export declare class BillingService {
    private readonly billingRepository;
    private readonly usersService;
    constructor(billingRepository: Repository<Billing>, usersService: UsersService);
    create(userId: string, createBillingDto: CreateBillingDto): Promise<Billing>;
    findByUser(userId: string): Promise<Billing[]>;
    updateStatus(id: string, status: 'pending' | 'completed' | 'failed'): Promise<Billing>;
}
