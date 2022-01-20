import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [AttendanceController],
    providers: [AttendanceService]
})
export class AttendanceModule {}
