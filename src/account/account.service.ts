import { Injectable } from '@nestjs/common';
import {AccountModel} from "./account.model";

@Injectable()
export class AccountService {
    async checkUser(amo_id){
        const check = await AccountModel.findOne({where: {amo_id}, include:{all:true}})
        if(!check){
            const account = await AccountModel.create({amo_id})
            const settings = await AccountModel.findOne({where: {amo_id}, include:{all:true}})
            return {settings: settings.settings}
        }
        return {settings: check.settings}
    }
}
