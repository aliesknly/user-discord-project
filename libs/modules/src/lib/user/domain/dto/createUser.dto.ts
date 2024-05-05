import { Validator } from '../../../../configs/validator';

export class CreateUserDto {
  private constructor(
    public userName: string,
    public email: string,
    public inscriptionDate?: string
  ) {
    if (!this.inscriptionDate) this.inscriptionDate = new Date().toISOString();
  }

  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { userName, email } = object;

    if (!userName) return ['user is required', undefined];
    if (!email) return ['email is required', undefined];
    if (!Validator.email.test(email)) return ['email is not valid', undefined];

    return [undefined, new CreateUserDto(userName, email)];
  }
}
