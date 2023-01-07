import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: process.env.FIRSTNAME_REQUIRED })
  firstName: string;

  @IsNotEmpty({ message: process.env.LASTNAME_REQUIRED })
  lastName: string;
}
