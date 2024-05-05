export class UserEntity {
  constructor(
    public userName: string,
    public email: string,
    public inscriptionDate: string,
    public totalTimeLikeMember: number
  ) {}
}
