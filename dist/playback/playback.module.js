"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybackModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const playback_service_1 = require("./playback.service");
const playback_controller_1 = require("./playback.controller");
const playback_entity_1 = require("./entities/playback.entity");
let PlaybackModule = class PlaybackModule {
};
exports.PlaybackModule = PlaybackModule;
exports.PlaybackModule = PlaybackModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([playback_entity_1.Playback])],
        providers: [playback_service_1.PlaybackService],
        controllers: [playback_controller_1.PlaybackController],
        exports: [playback_service_1.PlaybackService],
    })
], PlaybackModule);
//# sourceMappingURL=playback.module.js.map