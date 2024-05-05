import { Validator } from '../../../../configs/validator';

export class UpdateUserDto {
    private constructor(
      public user?: string,
      public email?: string,
      public inscriptionDate?: string,
    ) {}
  
    static create(object :{[key:string]:any}):[string?, UpdateUserDto?]{
      const { user, email , inscriptionDate} = object;
      if (!user) return ['user is required', undefined];
      if (!email) return ['email is required', undefined];
      if (!Validator.email.test(email)) return ['email is not valid', undefined];
      if (!inscriptionDate) return ['inscriptionDate is required', undefined];

      return [undefined, new UpdateUserDto(user, email, inscriptionDate)];
    }
  }