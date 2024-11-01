import { User } from '../../users/entities/user.entity';
export declare class Billing {
    id: string;
    user: User;
    userId: string;
    planId: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    transactionDate: Date;
}
