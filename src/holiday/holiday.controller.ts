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
import { HolidaySearchDto } from "./dto/holiday-search.dto ";
import { HolidayDto } from "./dto/holiday.dto";
import { HolidayService } from "./holiday.service";

@Controller("holiday")
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async getHolidayById(@Param("id") holidayId: string )  {
    return this.holidayService.findById(holidayId);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findAll()  {
    return this.holidayService.findAll();
  } 

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public async createHoliday(@Body() holidayDto: HolidayDto )  {
    return this.holidayService.createHoliday(holidayDto);
  }

  @Put("/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateHoliday(@Param("id") holidayId: string, @Body() holidayDto: HolidayDto )  {
    return this.holidayService.updateHoliday(holidayId,holidayDto);
  }

  @Post("/search")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async searchHoliday(@Body() holidaySearchDto: HolidaySearchDto )  {
   return this.holidayService.searchHoliday(holidaySearchDto);

  }

  @Get("/findByYear/:year")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findHolidayByYear(@Param('year') year : String)  {
    return this.holidayService.findHolidayByYear(year);
  } 

  @Get("/findByContext/:context")
  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    strategy: 'excludeAll'
  })
  public async findHolidayByContext(@Param('context') context : String)  {
    return this.holidayService.findHolidayByContext(context);
  } 


 
}
