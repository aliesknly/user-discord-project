import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserEntity } from '../user.entity';

export abstract class UserRepository {
  abstract getByEmail(email: string): Promise<UserEntity | null> 
  abstract create(user: CreateUserDto): Promise<UserEntity | null>;
  abstract delete(id: string): Promise<void>;
  abstract update(email: string, user: UpdateUserDto): Promise<UserEntity | null> 
  abstract findAll(): Promise<UserEntity[] | null>;
}