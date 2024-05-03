import { UserEntity } from '../../../domain/user.entity';

export interface ForUserApiControllerRepository {
  getAllUser<T, U>(req: T, res: U): Promise<UserEntity[] | null>;
  getUserById<T, U>(req: T, res: U): Promise<UserEntity | null>;
  createUser<T, U>(req: T, res: U): Promise<UserEntity | null>;
  updateUser<T, U>(req: T, res: U): Promise<UserEntity | null>;
  deleteUser<T, U>(req: T, res: U): Promise<UserEntity | null>;
  getUserByEmail<T, U>(req: T, res: U): Promise<UserEntity | null>;
}
