import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(email: string, password: string): Promise<Omit<User, 'password'>>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<Omit<User, 'password'>>;
    updateSubscription(userId: string, status: string): Promise<Omit<User, 'password'>>;
}
