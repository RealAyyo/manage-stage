import { Module } from '@nestjs/common';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {AccountModel} from "./account/account.model";
import {SettingsModel} from "./settings/settings.model";

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.HOST_DB,
    port: 5432,
    username: 'postgres',
    password: '159753',
    database: 'managestage',
    models: [AccountModel, SettingsModel],
    autoLoadModels: true
  }),],
  controllers: [AccountController, SettingsController],
  providers: [ AccountService, SettingsService],
})
export class AppModule {}
