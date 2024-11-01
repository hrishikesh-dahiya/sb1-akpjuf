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
exports.PlaybackService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const playback_entity_1 = require("./entities/playback.entity");
let PlaybackService = class PlaybackService {
    constructor(playbackRepository) {
        this.playbackRepository = playbackRepository;
    }
    async create(userId, createPlaybackDto) {
        const playback = this.playbackRepository.create({
            userId,
            ...createPlaybackDto,
        });
        return this.playbackRepository.save(playback);
    }
    async findByUser(userId) {
        return this.playbackRepository.find({
            where: { userId },
            relations: ['asset'],
        });
    }
    async findByAsset(assetId) {
        return this.playbackRepository.find({
            where: { assetId },
            relations: ['user'],
        });
    }
    async updateProgress(id, progress) {
        const playback = await this.playbackRepository.findOne({ where: { id } });
        if (!playback) {
            throw new common_1.NotFoundException(`Playback with ID ${id} not found`);
        }
        playback.progress = progress;
        return this.playbackRepository.save(playback);
    }
};
exports.PlaybackService = PlaybackService;
exports.PlaybackService = PlaybackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(playback_entity_1.Playback)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlaybackService);
//# sourceMappingURL=playback.service.js.map