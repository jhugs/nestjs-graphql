import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Brewery {
    @Field(() => ID)
    readonly id: string;

    @Field()
    readonly name: string;

    @Field()
    readonly brewery_type: string;

    @Field({ nullable: true })
    readonly street?: string;

    @Field({ nullable: true })
    readonly address_2?: string;

    @Field({ nullable: true })
    readonly address_3?: string;

    @Field()
    readonly city: string;

    @Field({ nullable: true })
    readonly state: string;

    @Field({ nullable: true })
    readonly county_province?: string;

    @Field()
    readonly postal_code: string;

    @Field()
    readonly country: string;

    @Field()
    readonly longitude: string;

    @Field()
    readonly latitude: string;

    @Field()
    readonly phone: string;

    @Field()
    readonly website_url: string;

    @Field()
    readonly updated_at: string;

    @Field()
    readonly created_at: string;
}
