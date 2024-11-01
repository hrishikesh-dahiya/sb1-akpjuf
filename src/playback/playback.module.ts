import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaybackService } from './playback.service';
import { PlaybackController } from './playback.controller';
import { Playback } from './entities/playback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Playback])],
  providers: [PlaybackService],
  controllers: [PlaybackController],
  exports: [PlaybackService],
})
export class PlaybackModule {}