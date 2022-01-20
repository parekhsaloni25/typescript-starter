import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { StudentDto} from './dto/student.dto';
import { ErrorResponse } from 'src/error-response';
import { StudentResponseDto } from './dto/student-response.dto';
import { StudentSearchDto } from './dto/student-search.dto ';

@Injectable()
export class StudentService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Student`;

  public async findById(studentId: string)  {
    return this.httpService.get(`${this.url}/${studentId}`)
    .pipe(
        map(response => {
          return new StudentDto(response.data) 
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

  public async createStudent(studentDto: StudentDto) {
      const headersRequest = {
        'Content-Type': 'application/json', 
        // 'Authorization': `Basic ${encodeToken}`,
      };
      return this.httpService.post(`${this.url}`,studentDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new StudentResponseDto( {
              studentId: response.data.result.Student.osid,
              responseMessage : "Student Saved Successfully",
              responseCode : response.data.responseCode
            })
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


  public async updateStudent(studentId:string,studentDto: StudentDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.patch(`${this.url}/${studentId}`,studentDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new StudentResponseDto( {
            studentId: response.data.result.Student.osid,
            responseMessage : "Student Updated Successfully",
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

public async searchStudent(studentSearchDto: StudentSearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
            return new StudentDto(item)
            
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

public async findStudentByClass(searchClassId: String) {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    classId : {
     "eq" : searchClassId
    }
  }
  var studentSearchDto = new StudentSearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,studentSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new StudentDto(item)
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


