import { User } from '../../users/entities/user.entity';
import { Asset } from '../../assets/entities/asset.entity';
export declare class Playback {
    id: string;
    user: User;
    userId: string;
    asset: Asset;
    assetId: string;
    progress: number;
    timestamp: Date;
}
