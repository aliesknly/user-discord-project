import {
  CreateUserDto,
  CustomError,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
} from '@user-discord-project/modules';
import { UserModel } from '../data/models/user.mongodb.model';

export class UserDatasourceImpl implements UserDatasource {
  async create(user: CreateUserDto): Promise<UserEntity> {
    const { email, userName, inscriptionDate } = user;

    try {
      // 1. Verify if user exists
      const existUser = await UserModel.findOne({ email });

      if (existUser) {
        throw CustomError.badRequest('User already exists');
      }

      const user = await UserModel.create({
        email,
        userName,
        inscriptionDate,
        totalTimeLikeMember: 0,
      });

      await user.save();
      // 2. Map user to UserEntity
      return user;
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
