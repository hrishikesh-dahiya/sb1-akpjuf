import { PlaybackService } from './playback.service';
import { CreatePlaybackDto } from './dto/create-playback.dto';
export declare class PlaybackController {
    private readonly playbackService;
    constructor(playbackService: PlaybackService);
    create(req: any, createPlaybackDto: CreatePlaybackDto): Promise<import("./entities/playback.entity").Playback>;
    findByUser(req: any): Promise<import("./entities/playback.entity").Playback[]>;
    findByAsset(id: string): Promise<import("./entities/playback.entity").Playback[]>;
    updateProgress(id: string, progress: number): Promise<import("./entities/playback.entity").Playback>;
}
