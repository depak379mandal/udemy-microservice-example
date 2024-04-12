import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CourseService } from './course.service';
import CourseCommand from 'commands/course.cmd';
import { CreateCourseDto } from 'apps/api-gateway/src/course/dto/create-course.dto';
import { UpdateCourseDto } from 'apps/api-gateway/src/course/dto/update-course.dto';

@Controller()
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @MessagePattern({ cmd: CourseCommand.delete })
  delete({ id }: { id: string }) {
    return this.courseService.delete(id);
  }

  @MessagePattern({ cmd: CourseCommand.getAll })
  getAll() {
    return this.courseService.getAll();
  }

  @MessagePattern({ cmd: CourseCommand.getOne })
  getOne({ id }: { id: string }) {
    return this.courseService.getOne(id);
  }

  @MessagePattern({ cmd: CourseCommand.create })
  create(createDto: CreateCourseDto) {
    return this.courseService.create(createDto);
  }

  @MessagePattern({ cmd: CourseCommand.update })
  update(updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(updateCourseDto);
  }
}
