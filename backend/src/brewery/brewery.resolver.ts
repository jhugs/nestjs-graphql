import { Args, Query, Resolver } from "@nestjs/graphql";
import { Brewery } from "src/brewery/brewery.dto";
import { BreweryService } from "src/brewery/brewery.service";

@Resolver(() => Brewery)
export class BreweryResolver {
    constructor(private readonly breweryService: BreweryService) {}

    @Query(() => [Brewery])
    async breweries(
        @Args("pageNumber", { nullable: false }) pageNumber: number,
        @Args("searchText", { nullable: true }) searchText?: string,
    ): Promise<Brewery[]> {
        return this.breweryService.findAll(pageNumber, searchText);
    }

    @Query(() => Brewery)
    async brewery(@Args("id") id: string): Promise<Brewery> {
        return this.breweryService.get(id);
    }
}
