export class UpdateUserDto {
    private constructor(
      public user: string,
      public email: string,
      public inscriptionDate: string,
      public totalTimeLikeMember: string
    ) {}
  
    static create(object :{[key:string]:any}):[string?, UpdateUserDto?]{
  
  
      return []
    }
  }