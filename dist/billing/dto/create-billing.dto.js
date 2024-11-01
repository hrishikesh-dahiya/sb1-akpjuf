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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBillingDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateBillingDto {
}
exports.CreateBillingDto = CreateBillingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'premium_monthly' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBillingDto.prototype, "planId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateBillingDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pending', enum: ['pending', 'completed', 'failed'] }),
    (0, class_validator_1.IsEnum)(['pending', 'completed', 'failed']),
    __metadata("design:type", String)
], CreateBillingDto.prototype, "status", void 0);
//# sourceMappingURL=create-billing.dto.js.map