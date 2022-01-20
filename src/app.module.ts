import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './Attendance/attendance.module';
import { ConfigurationModule } from './configs/configuration.module';
import { HolidayModule } from './holiday/holiday.module';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';
import { TeacherModule } from './teacher/teacher.module';
import { TimetableModule } from './Timetable/timetable.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    StudentModule,HolidayModule,ConfigurationModule,AttendanceModule,TimetableModule,TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
