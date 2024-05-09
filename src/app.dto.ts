import { ApiProperty } from "@nestjs/swagger";
// import { inherits } from 'util';
export class StringSufflingsDto {
  @ApiProperty()
  input_string: string;
}
export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}

export class RejectPaymentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  reason: string;
}
export class ApprovePaymentDto {
  @ApiProperty()
  id: number;
}
export class CanclePaymentDto {
  @ApiProperty()
  id: number;
}
export class CreatePaymentDto {
  @ApiProperty()
  price_without_vat: number;

  @ApiProperty()
  tin_id: string;

  @ApiProperty()
  tin_link: string;

  @ApiProperty()
  contract_link: string;

  @ApiProperty()
  email: string[];

  @ApiProperty()
  status: string;

  @ApiProperty()
  create_by: string;

  @ApiProperty()
  update_by: string;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  number_of_installment: number;

  @ApiProperty()
  payment_due_date: Date;

  @ApiProperty()
  request_id: number;
}
