import { Repository } from 'typeorm';
import { Playback } from './entities/playback.entity';
import { CreatePlaybackDto } from './dto/create-playback.dto';
export declare class PlaybackService {
    private readonly playbackRepository;
    constructor(playbackRepository: Repository<Playback>);
    create(userId: string, createPlaybackDto: CreatePlaybackDto): Promise<Playback>;
    findByUser(userId: string): Promise<Playback[]>;
    findByAsset(assetId: string): Promise<Playback[]>;
    updateProgress(id: string, progress: number): Promise<Playback>;
}
