import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

import { MessagesHelper } from '../../helpers/messages.helper';
import { RegexHelper } from '../../helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty({ message: MessagesHelper.FIRSTNAME_REQUIRED })
  firstName: string;

  @IsNotEmpty({ message: MessagesHelper.LASTNAME_REQUIRED })
  lastName: string;

  @IsNotEmpty({ message: MessagesHelper.EMAIL_REQUIRED })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: MessagesHelper.PASSWORD_REQUIRED })
  @Matches(RegexHelper.password, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  password: string;
}
