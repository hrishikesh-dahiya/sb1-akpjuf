import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Asset } from '../../assets/entities/asset.entity';

@Entity('playbacks')
export class Playback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => Asset)
  asset: Asset;

  @Column()
  assetId: string;

  @Column('float')
  progress: number;

  @CreateDateColumn()
  timestamp: Date;
}