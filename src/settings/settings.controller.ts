import {Body, Controller, Post} from '@nestjs/common';
import {SettingsService} from "./settings.service";
import {ISettings} from "./settings.interface";

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) {
    }
    @Post()
    async saveSettings(@Body() {amo_id, settings}){
        return await this.settingsService.saveSettings(amo_id, settings)
    }
}
