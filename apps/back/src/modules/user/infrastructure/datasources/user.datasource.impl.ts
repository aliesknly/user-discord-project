import {
  CreateUserDto,
  CustomError,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
} from '@user-discord-project/modules';

export class UserDatasourceImpl implements UserDatasource {

  
  async create(user: CreateUserDto): Promise<UserEntity> {
    const { email, userName } = user;

    try {
      // 1. Verify if user exists
      // 2. Map user to UserEntity
      return new UserEntity(email, userName, new Date().toISOString(), 22);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
  delete(email: string): Promise<void> {
    // 1. Verify if user exists
    // 2. Map user to UserEntity
    return Promise.resolve(null);
  }

  findAll(): Promise<UserEntity[]> {
    return Promise.resolve(null);
  }

  getByEmail(email: string): Promise<UserEntity> {
    return Promise.resolve(null);
  }

  update(email: string, user: UpdateUserDto): Promise<UserEntity> {
    return Promise.resolve(null);
  }
}
