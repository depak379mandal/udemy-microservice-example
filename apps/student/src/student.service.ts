import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from 'apps/api-gateway/src/student/dto/create-student.dto';
import { UpdateStudentDto } from 'apps/api-gateway/src/student/dto/update-student.dto';
import Student from 'models/Student';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private studentModel: Model<Student>,
  ) {}

  delete(_id: string) {
    return this.studentModel.deleteOne({ _id });
  }

  getAll() {
    return this.studentModel.find();
  }

  getOne(id: string) {
    return this.studentModel.findById(id);
  }

  create(createDto: CreateStudentDto) {
    return this.studentModel.create(createDto);
  }

  update({ id, ...updateDto }: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, updateDto, { new: true });
  }
}
