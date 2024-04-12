import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePurchaseDto } from 'apps/api-gateway/src/purchase/dto/create-purchase.dto';
import { UpdatePurchaseDto } from 'apps/api-gateway/src/purchase/dto/update-purchase.dto';
import Purchase from 'models/Purchase';
import { Model } from 'mongoose';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel(Purchase.name)
    private purchaseModel: Model<Purchase>,
  ) {}

  delete(_id: string) {
    return this.purchaseModel.deleteOne({ _id });
  }

  getAll() {
    return this.purchaseModel.find().populate('course').populate('purchasedBy');
  }

  getOne(id: string) {
    return this.purchaseModel
      .findById(id)
      .populate('course')
      .populate('purchasedBy');
  }

  create(createDto: CreatePurchaseDto) {
    return this.purchaseModel.create(createDto);
  }

  update({ id, ...updateDto }: UpdatePurchaseDto) {
    return this.purchaseModel.findByIdAndUpdate(id, updateDto, { new: true });
  }
}
