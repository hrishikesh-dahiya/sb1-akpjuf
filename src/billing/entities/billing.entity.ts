import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('billings')
export class Billing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @Column()
  planId: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  status: 'pending' | 'completed' | 'failed';

  @CreateDateColumn()
  transactionDate: Date;
}