import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HolidayDto} from './dto/holiday.dto';
import { ErrorResponse } from 'src/error-response';
import { HolidayResponseDto } from './dto/holiday-response.dto';
import { HolidaySearchDto } from './dto/holiday-search.dto ';

@Injectable()
export class HolidayService {
  constructor(private httpService:HttpService) {}
  
  url = `${process.env.BASE_URL}/Holiday`;

  
  public async findById(holidayId: string)  {
    return this.httpService.get(`${this.url}/${holidayId}`)
    .pipe(
        map(response => {
          return new HolidayDto(response.data) 
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


  public async createHoliday(holidayDto: HolidayDto) {
    const headersRequest  = {
      'Content-Type': 'application/json', 
    };
      return this.httpService.post(`${this.url}`,holidayDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new HolidayResponseDto( {
              holidayId: response.data.result.holiday.osid,
              responseMessage : "Holiday Saved Successfully",
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


  public async updateHoliday(holidayId:string,holidayDto: HolidayDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    return this.httpService.put(`${this.url}/${holidayId}`,holidayDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new HolidayResponseDto( {
            holidayId: response.data.result.holiday.osid,
            responseMessage : "Holiday Updated Successfully",
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

public async searchHoliday(holidaySearchDto: HolidaySearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  return this.httpService.post(`${this.url}/search`,holidaySearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
            return new HolidayDto(item)
            
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

public async findHolidayByYear(yearInput: String) {
  const headersRequest  = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    year : {
     "eq" : yearInput
    }
  }
  var holidaySearchDto = new HolidaySearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,holidaySearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new HolidayDto(item)
          
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

public async findHolidayByContext(context: String) {
  const headersRequest  = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    context : {
     "eq" : context
    }
  }
  var holidaySearchDto = new HolidaySearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,holidaySearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new HolidayDto(item)
          
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


public async findAll() {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    
  }
  var holidaySearchDto = new HolidaySearchDto({
    filters : searchFilter
  })

  return this.httpService.post(`${this.url}/search`,holidaySearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        return response.data.map(item =>{
          return new HolidayDto(item)
          
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


