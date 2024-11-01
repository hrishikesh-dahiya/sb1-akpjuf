export declare class CreateBillingDto {
    planId: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
}
