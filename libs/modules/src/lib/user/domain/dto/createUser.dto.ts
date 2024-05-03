import { Validator } from '@user-discord-project/config';

export class CreateUserDto {
  private constructor(public user: string, public email: string) {}

  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { user, email } = object;

    if (!user) return ['user is required', undefined];
    if (!email) return ['email is required', undefined];
    if (!Validator.email.test(email)) return ['email is not valid', undefined];

    return [undefined, new CreateUserDto(user, email)];
  }
}
