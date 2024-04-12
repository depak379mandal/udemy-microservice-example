import { Inject, Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ClientProxy } from '@nestjs/microservices';
import PurchaseCommand from 'commands/purchase.cmd';

@Injectable()
export class PurchaseService {
  constructor(
    @Inject('PUCRHASE_SERVICE')
    private purchaseClient: ClientProxy,
  ) {}

  create(createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseClient.send(
      { cmd: PurchaseCommand.create },
      createPurchaseDto,
    );
  }

  findAll() {
    return this.purchaseClient.send({ cmd: PurchaseCommand.getAll }, {});
  }

  findOne(id: string) {
    return this.purchaseClient.send({ cmd: PurchaseCommand.getOne }, { id });
  }

  update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseClient.send(
      { cmd: PurchaseCommand.update },
      { id, ...updatePurchaseDto },
    );
  }

  remove(id: string) {
    return this.purchaseClient.send({ cmd: PurchaseCommand.delete }, { id });
  }
}
