import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class AttendanceDto {
  
  @Exclude()
  osid : string 
  
  @Expose()
  attendanceRecordId: string;

  @Expose()
  studentId: string;

  @Expose()
  schoolId: string;
  
  @Expose()
  classId: string;

  @Expose()
  subjectId: string;

  @Expose()
  date : string

  @Expose()
  isApproved : string

  @Expose()
  attendance : string

  @Expose()
  remark : string




  constructor(partial: AttendanceDto) {
    Object.assign(this, partial);
    this.attendanceRecordId = `${this.osid}`;
    this.date = `${this.date}` == null || undefined || 'undefined' ? "" : `${this.date}` ;
    this.isApproved = `${this.isApproved}` == null || undefined || 'undefined' ? "" : `${this.isApproved}` ;
    this.attendance = `${this.attendance}` == null || undefined || 'undefined' ? "" : `${this.attendance}` ;
    this.subjectId = `${this.subjectId}` == null || undefined || 'undefined' ? "" : `${this.subjectId}` ;
    this.studentId = `${this.studentId}` == null || undefined || 'undefined' ? "" : `${this.studentId}` ;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.classId = `${this.classId}` == null || undefined || 'undefined' ? "" : `${this.classId}` ;
    this.remark = `${this.remark}` == null || undefined || 'undefined' ? "" : `${this.remark}` ;

  }

  

}
