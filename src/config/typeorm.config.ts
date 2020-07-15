import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url:
    'postgres://rpmeiovh:GSz9CJ5JM1TEkS-qcP2hcKlKubbYfHby@kandula.db.elephantsql.com:5432/rpmeiovh',
  entities: [Task],
  // entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
