import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class StudentDto {
  
  @Exclude()
  osid : string 
  
  @MaxLength(16)
  @Expose()
  aadhaar: string;
  
  @Expose()
  refStudentId: string;
  
  @Expose()
  firstName: string;
  
  @Expose()
  lastName: string;
  
  @IsNumber()
  contactNumber: string;
  
  @IsEmail()
  email: string;
  
  @Expose()
  gender: string;
  
  @Expose()
  socialCategory: string;
  
  @Expose()
  iscwsn: string;
  
  @Expose()
  religion: string;
  
  @Expose()
  singleGirl: string;
  
  @Expose()
  weight: string;
  
  @Expose()
  height: string;
  
  @Expose()
  bloodGroup: string;
  
  @Expose()
  birthDate: string;
  
  @Expose()
  homeless: string;
  
  @Expose()
  bpl: string;
  
  @Expose()
  migrant: string;
  
  @Expose()
  schoolId: string;
  
  @Expose()
  classId: string;
  
  @Expose()
  status: string;

  @Expose()
  studentId : string;

  @Expose()
  studentName : string;


  constructor(partial: StudentDto) {
    Object.assign(this, partial);
    this.studentId = `${this.osid}`;
    this.studentName = `${this.firstName} ${this.lastName}` 
    this.aadhaar = `${this.aadhaar}` == null || undefined || 'undefined' ? "" : `${this.aadhaar}` ;
    this.refStudentId = `${this.refStudentId}` == null || undefined || 'undefined' ? "" : `${this.refStudentId}` ;
    this.firstName = `${this.firstName}` == null || undefined || 'undefined' ? "" : `${this.firstName}` ;
    this.lastName = `${this.lastName}` == null || undefined || 'undefined' ? "" : `${this.lastName}` ;
    this.contactNumber = `${this.contactNumber}` == null || undefined || 'undefined' ? "" : `${this.contactNumber}` ;
    this.email = `${this.email}` == null || undefined || 'undefined' ? "" : `${this.email}` ;
    this.gender = `${this.gender}` == null || undefined || 'undefined' ? "" : `${this.gender}` ;
    this.socialCategory = `${this.socialCategory}` == null || undefined || 'undefined' ? "" : `${this.socialCategory}` ;
    this.iscwsn = `${this.iscwsn}` == null || undefined || 'undefined' ? "" : `${this.iscwsn}` ;
    this.religion = `${this.religion}` == null || undefined || 'undefined' ? "" : `${this.religion}` ;
    this.singleGirl = `${this.singleGirl}` == null || undefined || 'undefined' ? "" : `${this.singleGirl}` ;
    this.weight = `${this.weight}` == null || undefined || 'undefined' ? "" : `${this.weight}` ;
    this.height = `${this.height}` == null || undefined || 'undefined' ? "" : `${this.height}` ;
    this.bloodGroup = `${this.bloodGroup}` == null || undefined || 'undefined' ? "" : `${this.bloodGroup}` ;
    this.birthDate = `${this.birthDate}` == null || undefined || 'undefined' ? "" : `${this.birthDate}` ;
    this.homeless = `${this.homeless}` == null || undefined || 'undefined' ? "" : `${this.homeless}` ;
    this.bpl = `${this.bpl}` == null || undefined || 'undefined' ? "" : `${this.bpl}` ;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.classId = `${this.classId}` == null || undefined || 'undefined' ? "" : `${this.classId}` ;
    this.status = `${this.status}` == null || undefined || 'undefined' ? "" : `${this.status}` ;
    this.migrant = `${this.migrant}` == null || undefined || 'undefined' ? "" : `${this.migrant}` ;

  }

  

}
