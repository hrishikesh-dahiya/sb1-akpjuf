"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const billing_entity_1 = require("./entities/billing.entity");
const users_service_1 = require("../users/users.service");
let BillingService = class BillingService {
    constructor(billingRepository, usersService) {
        this.billingRepository = billingRepository;
        this.usersService = usersService;
    }
    async create(userId, createBillingDto) {
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
    async findByUser(userId) {
        return this.billingRepository.find({
            where: { userId },
            order: { transactionDate: 'DESC' },
        });
    }
    async updateStatus(id, status) {
        const billing = await this.billingRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!billing) {
            throw new common_1.NotFoundException(`Billing with ID ${id} not found`);
        }
        billing.status = status;
        const updatedBilling = await this.billingRepository.save(billing);
        if (status === 'completed') {
            await this.usersService.updateSubscription(billing.userId, 'premium');
        }
        else if (status === 'failed') {
            await this.usersService.updateSubscription(billing.userId, 'free');
        }
        return updatedBilling;
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(billing_entity_1.Billing)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], BillingService);
//# sourceMappingURL=billing.service.js.map