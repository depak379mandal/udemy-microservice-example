import { Inject, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ClientProxy } from '@nestjs/microservices';
import CourseCommand from 'commands/course.cmd';

@Injectable()
export class CourseService {
  constructor(
    @Inject('COURSE_SERVICE')
    private courseClient: ClientProxy,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    return this.courseClient.send(
      { cmd: CourseCommand.create },
      createCourseDto,
    );
  }

  findAll() {
    return this.courseClient.send({ cmd: CourseCommand.getAll }, {});
  }

  findOne(id: string) {
    return this.courseClient.send({ cmd: CourseCommand.getOne }, { id });
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseClient.send(
      { cmd: CourseCommand.update },
      { id, ...updateCourseDto },
    );
  }

  remove(id: string) {
    return this.courseClient.send({ cmd: CourseCommand.delete }, { id });
  }
}
