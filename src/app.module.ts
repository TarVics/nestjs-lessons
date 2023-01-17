import { Module } from '@nestjs/common';
import { Dialect } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
// import { CarController } from './car/car.controller';
import { CarModule } from './car/car.module';
// import { UserService } from './user/user.service';
import { User } from './user/user.model';

@Module({
  imports: [
    UserModule,
    CarModule,
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    // }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
    }),
    SequelizeModule.forRoot({
      dialect: config().database.dialect as Dialect,
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.database,
      models: [User],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController /*, UserController, CarController*/],
  providers: [AppService /*, UserService*/],
})
export class AppModule {}
