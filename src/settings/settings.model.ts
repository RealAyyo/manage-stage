import {Column, DataType, Model, Table, HasMany, BelongsTo, ForeignKey} from "sequelize-typescript";
import {AccountModel} from "../account/account.model";
import {ISettings, IStatusSettings} from "./settings.interface";



@Table({tableName: 'settings'})
export class SettingsModel extends Model<SettingsModel, ISettings>{

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => AccountModel)
    @Column({type: DataType.INTEGER})
    account_id: number;

    @Column({type: DataType.INTEGER})
    pipeline_id: number;

    @Column({type: DataType.JSONB})
    users: number[];

    @Column({type: DataType.JSONB})
    statusSettings: IStatusSettings

    @BelongsTo(() => AccountModel)
    account: AccountModel
}