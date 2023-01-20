import { Module } from '@nestjs/common';
import { Dialect } from 'sequelize';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
// import { UserService } from './user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.model';
// import { RoleModule } from './role/role.module';
import { Car } from './car/car.model';
import { Role } from './role/role.model';
import { UserRoles } from './role/user-role.model';

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
      models: [User, Car, Role, UserRoles],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController /*, UserController, CarController*/],
  providers: [AppService /*, UserService*/],
})
export class AppModule {}
