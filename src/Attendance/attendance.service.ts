import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AttendanceDto} from './dto/attendance.dto';
import { ErrorResponse } from 'src/error-response';
import { AttendanceResponseDto } from './dto/attendance-response.dto';
import { AttendanceSearchDto } from './dto/attendance-search.dto ';

@Injectable()
export class AttendanceService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Attendance`;

  public async findById(attendanceId: string)  {
    return this.httpService.get(`${this.url}/${attendanceId}`)
    .pipe(
        map(response => {
          return new AttendanceDto(response.data) 
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

  public async createAttendance(attendanceDto: AttendanceDto) {
      const headersRequest = {
        'Content-Type': 'application/json', 
        // 'Authorization': `Basic ${encodeToken}`,
      };
      return this.httpService.post(`${this.url}`,attendanceDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new AttendanceResponseDto( {
              attendanceRecordId: response.data.result.attendance.osid,
              responseMessage : "Attendance Saved Successfully",
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


  public async updateAttendance(attendanceId:string,attendanceDto: AttendanceDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.put(`${this.url}/${attendanceId}`,attendanceDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new AttendanceResponseDto( {
            attendanceRecordId: response.data.result.attendance.osid,
            responseMessage : "Attendance Updated Successfully",
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

public async searchAttendance(attendanceSearchDto: AttendanceSearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,attendanceSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
            return new AttendanceDto(item)
            
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

public async findAttendanceByClass(searchClassId: String,
  fromDate: String, toDate: String) {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    classId : {
     "eq" : searchClassId
    }
  }
  var attendanceSearchDto = new AttendanceSearchDto({
    filters : searchFilter
  })

  console.log(attendanceSearchDto)
  return this.httpService.post(`${this.url}/search`,attendanceSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new AttendanceDto(item)
          
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


public async findAttendanceByClassAndSubject(classId: String,
  subjectId : String,
  fromDate: String, toDate: String) {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    classId : {
     "eq" : classId
    }
  }
  var attendanceSearchDto = new AttendanceSearchDto({
    filters : searchFilter
  })

  console.log(attendanceSearchDto)
  return this.httpService.post(`${this.url}/search`,attendanceSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new AttendanceDto(item)
          
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


