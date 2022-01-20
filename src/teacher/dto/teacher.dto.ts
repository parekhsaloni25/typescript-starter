import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TeacherDto {
  
  @Exclude()
  osid : string 

  @Expose()
  teacherId: string;
    
  @Expose()
  refTeacherId: string;
  
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
  birthDate: string;
  
  @Expose()
  designation: string;
  
  @Expose()
  cadre: string;
  
  @Expose()
  profQualification: string;
  
  @Expose()
  joiningDate: string;
  
  @Expose()
  subjectId: string;
  
  @Expose()
  bloodGroup: string;
  
  @Expose()
  maritalStatus: string;
  
  @Expose()
  blockId: string;
  
  @Expose()
  address: string;
  
  @Expose()
  compSkills: string;
  
  @Expose()
  schoolId: string;
  
  @Expose()
  disability: string;
  
  @Expose()
  religion: string;

  @Expose()
  homeDistance : string;

  @Expose()
  roles : string;

  @Expose()
  acrId : string;

  @Expose()
  retirementDate : string;

  @Expose()
  workingStatus : string;


  constructor(partial: TeacherDto) {
    Object.assign(this, partial);
    this.teacherId = `${this.osid}`;
    this.refTeacherId = `${this.refTeacherId}` == null || undefined || 'undefined' ? "" : `${this.refTeacherId}` ;
    this.firstName = `${this.firstName}` == null || undefined || 'undefined' ? "" : `${this.firstName}` ;
    this.lastName = `${this.lastName}` == null || undefined || 'undefined' ? "" : `${this.lastName}` ;
    this.contactNumber = `${this.contactNumber}` == null || undefined || 'undefined' ? "" : `${this.contactNumber}` ;
    this.email = `${this.email}` == null || undefined || 'undefined' ? "" : `${this.email}` ;
    this.gender = `${this.gender}` == null || undefined || 'undefined' ? "" : `${this.gender}` ;
    this.socialCategory = `${this.socialCategory}` == null || undefined || 'undefined' ? "" : `${this.socialCategory}` ;
    this.birthDate = `${this.birthDate}` == null || undefined || 'undefined' ? "" : `${this.birthDate}` ;
    this.designation = `${this.designation}` == null || undefined || 'undefined' ? "" : `${this.designation}` ;
    this.cadre = `${this.cadre}` == null || undefined || 'undefined' ? "" : `${this.cadre}` ;
    this.profQualification = `${this.profQualification}` == null || undefined || 'undefined' ? "" : `${this.profQualification}` ;
    this.joiningDate = `${this.joiningDate}` == null || undefined || 'undefined' ? "" : `${this.joiningDate}` ;
    this.subjectId = `${this.subjectId}` == null || undefined || 'undefined' ? "" : `${this.subjectId}` ;
    this.bloodGroup = `${this.bloodGroup}` == null || undefined || 'undefined' ? "" : `${this.bloodGroup}` ;
    this.maritalStatus = `${this.maritalStatus}` == null || undefined || 'undefined' ? "" : `${this.maritalStatus}` ;
    this.blockId = `${this.blockId}` == null || undefined || 'undefined' ? "" : `${this.blockId}` ;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.address = `${this.address}` == null || undefined || 'undefined' ? "" : `${this.address}` ;
    this.compSkills = `${this.compSkills}` == null || undefined || 'undefined' ? "" : `${this.compSkills}` ;
    this.religion = `${this.religion}` == null || undefined || 'undefined' ? "" : `${this.religion}` ;
    this.homeDistance = `${this.homeDistance}` == null || undefined || 'undefined' ? "" : `${this.homeDistance}` ;
    this.roles = `${this.roles}` == null || undefined || 'undefined' ? "" : `${this.roles}` ;
    this.disability = `${this.disability}` == null || undefined || 'undefined' ? "" : `${this.disability}` ;
    this.acrId = `${this.acrId}` == null || undefined || 'undefined' ? "" : `${this.acrId}` ;
    this.retirementDate = `${this.retirementDate}` == null || undefined || 'undefined' ? "" : `${this.retirementDate}` ;
    this.workingStatus = `${this.workingStatus}` == null || undefined || 'undefined' ? "" : `${this.workingStatus}` ;

  }

  

}
