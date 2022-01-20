import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Query,
  SerializeOptions,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AttendanceSearchDto } from "./dto/attendance-search.dto ";
import { AttendanceDto } from "./dto/attendance.dto";
import { AttendanceService } from "./attendance.service";

@Controller("attendance")
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getAttendanceById(@Param("id") attendanceId: string )  {
    return this.attendanceService.findById(attendanceId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createAttendance(@Body() attendanceDto: AttendanceDto )  {
    return this.attendanceService.createAttendance(attendanceDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateAttendance(@Param("id") attendanceId: string, @Body() attendanceDto: AttendanceDto )  {
    return this.attendanceService.updateAttendance(attendanceId,attendanceDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchAttendance(@Body() attendanceSearchDto: AttendanceSearchDto )  {
   return this.attendanceService.searchAttendance(attendanceSearchDto);

  }

  @Post("/findByClass")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findAttendanceByClass(@Query('classId') classId : String,
  @Query('fromDate') fromDate : String,@Query('toDate') toDate : String)  {
    return this.attendanceService.findAttendanceByClass(classId,fromDate,toDate);
  } 


  @Post("/findByClassAndSubject")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findByClassAndSubject(@Query('classId') classId : String,
  @Query('classId') subjectId : String,
  @Query('fromDate') fromDate : String,@Query('toDate') toDate : String)  {
    return this.attendanceService.findAttendanceByClassAndSubject(classId,subjectId,fromDate,toDate);
  } 
 
}
