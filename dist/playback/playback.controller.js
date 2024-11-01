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
exports.PlaybackController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const playback_service_1 = require("./playback.service");
const create_playback_dto_1 = require("./dto/create-playback.dto");
let PlaybackController = class PlaybackController {
    constructor(playbackService) {
        this.playbackService = playbackService;
    }
    async create(req, createPlaybackDto) {
        return this.playbackService.create(req.user.id, createPlaybackDto);
    }
    async findByUser(req) {
        return this.playbackService.findByUser(req.user.id);
    }
    async findByAsset(id) {
        return this.playbackService.findByAsset(id);
    }
    async updateProgress(id, progress) {
        return this.playbackService.updateProgress(id, progress);
    }
};
exports.PlaybackController = PlaybackController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_playback_dto_1.CreatePlaybackDto]),
    __metadata("design:returntype", Promise)
], PlaybackController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaybackController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('asset/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlaybackController.prototype, "findByAsset", null);
__decorate([
    (0, common_1.Put)(':id/progress'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('progress')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PlaybackController.prototype, "updateProgress", null);
exports.PlaybackController = PlaybackController = __decorate([
    (0, swagger_1.ApiTags)('playback'),
    (0, common_1.Controller)('playback'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [playback_service_1.PlaybackService])
], PlaybackController);
//# sourceMappingURL=playback.controller.js.map