import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BreweryModule } from "./brewery/brewery.module";

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: "schema.gql",
        }),
        BreweryModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
