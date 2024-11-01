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
exports.CreateAssetDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAssetDto {
}
exports.CreateAssetDto = CreateAssetDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Introduction to NestJS' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Learn the basics of NestJS framework' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'video', enum: ['video', 'preview', 'thumbnail'] }),
    (0, class_validator_1.IsEnum)(['video', 'preview', 'thumbnail']),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://storage.example.com/video.mp4' }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 120.5, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAssetDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            resolution: '1920x1080',
            bitrate: '5000kbps'
        },
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateAssetDto.prototype, "metadata", void 0);
//# sourceMappingURL=create-asset.dto.js.map