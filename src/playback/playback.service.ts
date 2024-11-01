import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playback } from './entities/playback.entity';
import { CreatePlaybackDto } from './dto/create-playback.dto';

@Injectable()
export class PlaybackService {
  constructor(
    @InjectRepository(Playback)
    private readonly playbackRepository: Repository<Playback>,
  ) {}

  async create(userId: string, createPlaybackDto: CreatePlaybackDto): Promise<Playback> {
    const playback = this.playbackRepository.create({
      userId,
      ...createPlaybackDto,
    });
    return this.playbackRepository.save(playback);
  }

  async findByUser(userId: string): Promise<Playback[]> {
    return this.playbackRepository.find({
      where: { userId },
      relations: ['asset'],
    });
  }

  async findByAsset(assetId: string): Promise<Playback[]> {
    return this.playbackRepository.find({
      where: { assetId },
      relations: ['user'],
    });
  }

  async updateProgress(id: string, progress: number): Promise<Playback> {
    const playback = await this.playbackRepository.findOne({ where: { id } });
    if (!playback) {
      throw new NotFoundException(`Playback with ID ${id} not found`);
    }

    playback.progress = progress;
    return this.playbackRepository.save(playback);
  }
}