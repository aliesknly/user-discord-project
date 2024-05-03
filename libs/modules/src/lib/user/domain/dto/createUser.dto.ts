import { Validator } from '../../../../configs/validator';

export class CreateUserDto {
  public readonly inscriptionDate: string;
  private constructor(public userName: string, public email: string) {
    this.inscriptionDate = new Date().toISOString();
  }

  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { userName, email } = object;

    if (!userName) return ['user is required', undefined];
    if (!email) return ['email is required', undefined];
    if (!Validator.email.test(email)) return ['email is not valid', undefined];

    return [undefined, new CreateUserDto(userName, email)];
  }
}
