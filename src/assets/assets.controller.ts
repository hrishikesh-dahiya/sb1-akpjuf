import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  UseGuards,
  Headers,
  Response,
  StreamableFile
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@ApiTags('assets')
@Controller('assets')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  async create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @Get()
  async findAll() {
    return this.assetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.assetsService.findOne(id);
  }

  @Get(':id/stream')
  async streamVideo(
    @Param('id') id: string,
    @Headers('range') range: string,
    @Response({ passthrough: true }) res,
  ) {
    const { headers, stream } = await this.assetsService.streamVideo(id, range);
    Object.entries(headers).forEach(([key, value]) => {
      res.header(key, value);
    });
    return new StreamableFile(stream);
  }
}