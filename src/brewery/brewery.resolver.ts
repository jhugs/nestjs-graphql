import { Args, Query, Resolver } from '@nestjs/graphql';
import { Brewery } from 'src/brewery/brewery.dto';
import { BreweryService } from 'src/brewery/brewery.service';

@Resolver(() => Brewery)
export class BreweryResolver {
    constructor(private readonly breweryService: BreweryService) {}

    @Query(() => [Brewery])
    async breweries(
        @Args('searchText') searchText?: string,
    ): Promise<Brewery[]> {
        return this.breweryService.findAll(searchText);
    }

    @Query(() => Brewery)
    async brewery(@Args('id') id: string): Promise<Brewery> {
        return this.breweryService.get(id);
    }
}
