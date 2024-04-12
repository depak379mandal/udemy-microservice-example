import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTeacherDto } from 'apps/api-gateway/src/teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from 'apps/api-gateway/src/teacher/dto/update-teacher.dto';
import Teacher from 'models/Teacher';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name)
    private teacherModel: Model<Teacher>,
  ) {}

  delete(_id: string) {
    return this.teacherModel.deleteOne({ _id });
  }

  getAll() {
    return this.teacherModel.find();
  }

  getOne(id: string) {
    return this.teacherModel.findById(id);
  }

  create(createDto: CreateTeacherDto) {
    return this.teacherModel.create(createDto);
  }

  update({ id, ...updateDto }: UpdateTeacherDto) {
    return this.teacherModel.findByIdAndUpdate(id, updateDto, { new: true });
  }
}
