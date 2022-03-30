import { Injectable } from '@nestjs/common';
import {SettingsModel} from "./settings.model";
import {AccountModel} from "../account/account.model";
import {ISettings} from "./settings.interface";

@Injectable()
export class SettingsService {
    async saveSettings(amo_id, settings){
        const account = await AccountModel.findOne({where: {amo_id}, include:{all:true}})
        if(account.settings.length !== 0){
            await SettingsModel.destroy({where:{account_id: account.id}})
        }
        settings.map(async (setting) => {
            let {pipeline_id, users, statusSettings} = setting
            await SettingsModel.create({account_id: account.id, pipeline_id, users, statusSettings})
        })

        return 'success'
    }
}
