import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class UpdatePurchaseDto {
  @ApiProperty()
  @IsMongoId()
  course: string;

  @ApiProperty()
  @IsMongoId()
  purchasedBy: string;

  id: string;
}
