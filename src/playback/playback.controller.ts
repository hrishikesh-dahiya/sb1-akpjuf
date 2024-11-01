import { Controller, Get, Post, Body, Param, Put, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PlaybackService } from './playback.service';
import { CreatePlaybackDto } from './dto/create-playback.dto';

@ApiTags('playback')
@Controller('playback')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PlaybackController {
  constructor(private readonly playbackService: PlaybackService) {}

  @Post()
  async create(@Request() req, @Body() createPlaybackDto: CreatePlaybackDto) {
    return this.playbackService.create(req.user.id, createPlaybackDto);
  }

  @Get('user')
  async findByUser(@Request() req) {
    return this.playbackService.findByUser(req.user.id);
  }

  @Get('asset/:id')
  async findByAsset(@Param('id') id: string) {
    return this.playbackService.findByAsset(id);
  }

  @Put(':id/progress')
  async updateProgress(
    @Param('id') id: string,
    @Body('progress') progress: number,
  ) {
    return this.playbackService.updateProgress(id, progress);
  }
}