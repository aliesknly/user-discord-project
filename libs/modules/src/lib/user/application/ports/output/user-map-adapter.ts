import { UserEntity as User } from "../../../domain/user.entity";
import { UserEntity as IUserModel  } from "../../../domain";

type UserShow = Omit<User, "password">;

export const mapUserToModel = (user: User): IUserModel => ({
  userName: user.userName,
  email: user.email,
  inscriptionDate: user.inscriptionDate,
  totalTimeLikeMember: user.totalTimeLikeMember,
});

/* export const mapModelToUser = (model: IUserModel): UserShow => ({
  name: model.name,
  lastName: model.lastName,
  email: model.email,
  code: model.code,
});
 */
export class UserMapAdapter {
  static mapUserToModel(user: User): IUserModel {
    return mapUserToModel(user);
  }
 /*  static mapModelToUser(model: IUserModel): UserShow {
    return mapModelToUser(model);
  } */
}