import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<Omit<import("./entities/user.entity").User, "password">>;
    getProfile(req: any): Promise<Omit<import("./entities/user.entity").User, "password">>;
}
