import {
  ForUserApiControllerRepository,
  UserEntity,
} from '@user-discord-project/modules';

export class UserApiController implements ForUserApiControllerRepository {
  constructor() {
    this.createUser = this.createUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.getUserByEmail = this.getUserByEmail.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  createUser<T, U>(req: T, res: U): Promise<UserEntity> {
    return null;
  }
  deleteUser<T, U>(req: T, res: U): Promise<UserEntity> {
    return null;
  }

  getAllUser<T, U>(req: T, res: U): Promise<UserEntity[]> {
    return null;
  }

  getUserById<T, U>(req: T, res: U): Promise<UserEntity> {
    return null;
  }

  getUserByEmail<T, U>(req: T, res: U): Promise<UserEntity> {
    return null;
  }

  updateUser<T, U>(req: T, res: U): Promise<UserEntity> {
    return null;
  }
}
