import { StreamableFile } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    create(createAssetDto: CreateAssetDto): Promise<import("./entities/asset.entity").Asset>;
    findAll(): Promise<import("./entities/asset.entity").Asset[]>;
    findOne(id: string): Promise<import("./entities/asset.entity").Asset>;
    streamVideo(id: string, range: string, res: any): Promise<StreamableFile>;
}
