import {
  CreateUserDto,
  UpdateUserDto,
  UserRepository,
} from '@user-discord-project/modules';
import { Request, Response } from 'express';

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  createUser = (req: Request, res: Response) => {
    const [error, createUserDto] = CreateUserDto.create(req.body);

    if (error) {
      return res.status(400).json({ error });
    }

    this.userRepository
      .create(createUserDto)
      .then((user) => {
        return res.status(201).json({ user });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  };

  updateUser = (req: Request, res: Response) => {
    const [error, updateUserDto] = UpdateUserDto.create(req.body);
  };

  getUserList = (req: Request, res: Response) => {
    this.userRepository
      .findAll()
      .then((userList) => {
        return res.status(200).json({ userList });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  };
}
