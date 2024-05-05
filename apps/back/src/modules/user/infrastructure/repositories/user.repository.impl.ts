import { CreateUserDto, UpdateUserDto, UserDatasource, UserEntity, UserRepository } from "@user-discord-project/modules";

export class UserRepositoryImpl implements UserRepository {
    constructor(
        private readonly userDatasorce:UserDatasource
    ) {}

    create(user: CreateUserDto): Promise<UserEntity> {
        return this.userDatasorce.create(user);
    }

    findAll(): Promise<UserEntity[]> {
        return this.userDatasorce.findAll();
    }

    getByEmail(email: string): Promise<UserEntity> {
        return this.userDatasorce.getByEmail(email);
    }

    delete(email: string): Promise<void> {
        return this.userDatasorce.delete(email);
    }

    update(email: string, user: UpdateUserDto): Promise<UserEntity> {
        return this.userDatasorce.update(email, user);
    }
}