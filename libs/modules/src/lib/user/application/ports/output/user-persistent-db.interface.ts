import { UpdateUserDto } from '../../../domain/dto/updateUser.dto';
import { CreateUserDto } from '../../../domain/dto/createUser.dto';
import { UserEntity } from '../../../domain/user.entity';

export interface ForPersistenceDBRepositoryInterface {
  getAllUser(): Promise<UserEntity[] | null>;
  getUserById(email: string): Promise<UserEntity | null>;
  createUser(user: CreateUserDto): Promise<UserEntity | null>;
  updateUser(id: string, user: UpdateUserDto): Promise<UserEntity | null>;
  deleteUser(id: string): Promise<UserEntity | null>;
}
