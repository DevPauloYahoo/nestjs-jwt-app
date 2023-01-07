import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';

export class UsersRepository extends Repository<UsersEntity> {}
