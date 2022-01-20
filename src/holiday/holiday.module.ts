import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayController } from './holiday.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [HolidayController],
    providers: [HolidayService]
})
export class HolidayModule {}
