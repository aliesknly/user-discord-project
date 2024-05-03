import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserEntity } from '../user.entity';

export interface UserRepositoryInterface {
  findByEmail(email: string): Promise<UserEntity | null> 
  create(user: CreateUserDto): Promise<UserEntity | null>;
  delete(id: string): Promise<void>;
  update(email: string, user: UpdateUserDto): Promise<UserEntity | null> 
  findAll(): Promise<UserEntity[] | null>;
}