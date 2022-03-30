import {AccountModel} from "../account/account.model";

export interface ISettings {
    id?: number;
    account_id: number;
    pipeline_id: number;
    users: number[];
    statusSettings: IStatusSettings;
    account?: AccountModel;
}
export interface IStatusSettings {
    impossible: number;
    possible: number[];
}
