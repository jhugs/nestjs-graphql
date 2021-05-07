import { HttpModule, Module } from "@nestjs/common";
import { BreweryService } from "./brewery.service";
import { BreweryResolver } from "./brewery.resolver";

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [BreweryService, BreweryResolver],
})
export class BreweryModule {}
