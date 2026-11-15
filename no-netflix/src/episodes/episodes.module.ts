import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';

@Module({
  imports: [HttpModule],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
