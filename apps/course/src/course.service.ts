import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from 'apps/api-gateway/src/course/dto/create-course.dto';
import { UpdateCourseDto } from 'apps/api-gateway/src/course/dto/update-course.dto';
import Course from 'models/Course';
import { Model } from 'mongoose';
import TeacherCommand from 'commands/teacher.cmd';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: Model<Course>,
    @Inject('TEACHER_SERVICE')
    private teacherClient: ClientProxy,
  ) {}

  delete(_id: string) {
    return this.courseModel.deleteOne({ _id });
  }

  getAll() {
    return this.courseModel.find();
  }

  getOne(id: string) {
    return this.courseModel.findById(id);
  }

  async create(createDto: CreateCourseDto) {
    const teacher = await lastValueFrom(
      this.teacherClient.send(
        { cmd: TeacherCommand.getOne },
        { id: createDto.createdBy },
      ),
    );

    if (!teacher) {
      return { createdBy: 'not found', status: false };
    }

    return this.courseModel.create({
      ...createDto,
    });
  }

  update({ id, ...updateDto }: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id, updateDto, { new: true });
  }
}
