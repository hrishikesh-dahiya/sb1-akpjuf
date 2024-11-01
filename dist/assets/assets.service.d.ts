import { Repository } from 'typeorm';
import { Asset } from './entities/asset.entity';
import { CreateAssetDto } from './dto/create-asset.dto';
export declare class AssetsService {
    private readonly assetsRepository;
    constructor(assetsRepository: Repository<Asset>);
    create(createAssetDto: CreateAssetDto): Promise<Asset>;
    findAll(): Promise<Asset[]>;
    findOne(id: string): Promise<Asset>;
    streamVideo(id: string, range: string): Promise<{
        headers: {
            'Content-Range': string;
            'Accept-Ranges': string;
            'Content-Length': number;
            'Content-Type': string;
        };
        stream: import("fs").ReadStream;
    }>;
}
