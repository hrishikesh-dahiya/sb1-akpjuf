import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    create(req: any, createBillingDto: CreateBillingDto): Promise<import("./entities/billing.entity").Billing>;
    findByUser(req: any): Promise<import("./entities/billing.entity").Billing[]>;
    updateStatus(id: string, status: 'pending' | 'completed' | 'failed'): Promise<import("./entities/billing.entity").Billing>;
}
