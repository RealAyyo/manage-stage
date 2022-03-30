import { Column, DataType, Model, Table, HasMany} from "sequelize-typescript";
import {SettingsModel} from "../settings/settings.model";

interface IAccounts{
    id: number;
    amo_id: number;
    settings: SettingsModel[]
}

@Table({tableName: 'accounts'})
export class AccountModel extends Model<AccountModel>{

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({type:DataType.INTEGER, unique: true, allowNull: false})
    amo_id: number;

    @HasMany(() => SettingsModel)
    settings: SettingsModel[];
}