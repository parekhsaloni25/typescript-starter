import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { TeacherDto} from './dto/teacher.dto';
import { ErrorResponse } from 'src/error-response';
import { TeacherResponseDto } from './dto/teacher-response.dto';
import { TeacherSearchDto } from './dto/teacher-search.dto ';

@Injectable()
export class TeacherService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Teacher`;

  public async findById(teacherId: string)  {
    return this.httpService.get(`${this.url}/${teacherId}`)
    .pipe(
        map(response => {
          return new TeacherDto(response.data) 
      }),
        catchError(e => {
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
  }

  public async createTeacher(teacherDto: TeacherDto) {
      const headersRequest = {
        'Content-Type': 'application/json', 
        // 'Authorization': `Basic ${encodeToken}`,
      };
      return this.httpService.post(`${this.url}`,teacherDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new TeacherResponseDto( {
              teacherId: response.data.result.teacher.osid,
              responseMessage : "Teacher Saved Successfully",
              responseCode : response.data.responseCode
            })
        }),
          catchError(e => {
            console.log(e.response.data)
            var error = new ErrorResponse({
              errorCode : e.response.status,
              errorMessage : e.response.data.params.errmsg
            })
            throw new HttpException(error, e.response.status);
          })
      );
  }


  public async updateTeacher(teacherId:string,teacherDto: TeacherDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.put(`${this.url}/${teacherId}`,teacherDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new TeacherResponseDto( {
            teacherId: response.data.result.teacher.osid,
            responseMessage : "Teacher Updated Successfully",
            responseCode : response.data.responseCode
          })
      }),
        catchError(e => {
          console.log(e.response.data)
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
}

public async searchTeacher(teacherSearchDto: TeacherSearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,teacherSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
            return new TeacherDto(item)
            
        });
       
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(error, e.response.status);
      })
  );

 
}

public async findTeacherBySubject(subjectId: String) {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    subjectId : {
     "eq" : subjectId
    }
  }
  var teacherSearchDto = new TeacherSearchDto({
    filters : searchFilter
  })

  console.log(teacherSearchDto)
  return this.httpService.post(`${this.url}/search`,teacherSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new TeacherDto(item)
          
      });
    }),
      catchError(e => {
        console.log(e)
        var error = new ErrorResponse({
          errorCode : e.response.status,
          errorMessage : e.response.data.params.errmsg
        })
        throw new HttpException(e.response.data, e.response.status);
      })
  );
}

}


