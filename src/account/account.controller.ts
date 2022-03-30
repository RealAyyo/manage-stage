import {Body, Controller, Get, Post} from '@nestjs/common';
import {AccountService} from "./account.service";

@Controller()
export class AccountController {
    constructor(private readonly accountService: AccountService) {
    }
    @Post()
    async checkUser(@Body() {amo_id}){
        return await this.accountService.checkUser(amo_id)
    }
}
