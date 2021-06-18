import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { BreweryModule } from "./brewery/brewery.module";

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: "schema.gql",
        }),
        BreweryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
