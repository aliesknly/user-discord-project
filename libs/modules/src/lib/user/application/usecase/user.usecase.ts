import { UserEntity } from '../../domain';
import { CreateUserDto, UpdateUserDto } from '../../domain/dto';
import { UserRepository } from '../../domain/repository';
import { ForPersistenceDBRepositoryInterface } from '../ports/output/user-persistent-db.interface';

export class UserUseCase implements UserRepository {
  constructor(
    private readonly userSchema: ForPersistenceDBRepositoryInterface
  ) {}
  async create(user: CreateUserDto): Promise<UserEntity | null> {
    return await this.userSchema.createUser(user);
  }
  async delete(id: string): Promise<void> {
    await this.userSchema.deleteUser(id);
  }
  async findAll(): Promise<UserEntity[] | null> {
    return await this.userSchema.getAllUser();
  }
  async getByEmail(email: string): Promise<UserEntity | null> {
    return await this.userSchema.getUserById(email);
  }
  async update(email: string, user: UpdateUserDto): Promise<UserEntity | null> {
    return await this.userSchema.updateUser(email, user);
  }
}
