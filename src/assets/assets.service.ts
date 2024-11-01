import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './entities/asset.entity';
import { CreateAssetDto } from './dto/create-asset.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetsRepository: Repository<Asset>,
  ) {}

  async create(createAssetDto: CreateAssetDto): Promise<Asset> {
    const asset = this.assetsRepository.create(createAssetDto);
    return this.assetsRepository.save(asset);
  }

  async findAll(): Promise<Asset[]> {
    return this.assetsRepository.find();
  }

  async findOne(id: string): Promise<Asset> {
    const asset = await this.assetsRepository.findOne({ where: { id } });
    if (!asset) {
      throw new NotFoundException(`Asset with ID ${id} not found`);
    }
    return asset;
  }

  async streamVideo(id: string, range: string) {
    const asset = await this.findOne(id);
    if (asset.type !== 'video') {
      throw new NotFoundException('Asset is not a video');
    }

    // For local files (in production, you'd stream from S3 or similar)
    const videoPath = asset.url;
    const videoSize = 1000000; // Example size, in production get actual file size

    const start = Number((range || '').replace(/bytes=/, '').split('-')[0] || '0');
    const end = Math.min(start + 10 ** 6, videoSize - 1);

    const contentLength = end - start + 1;

    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    };

    return {
      headers,
      stream: createReadStream(videoPath, { start, end }),
    };
  }
}