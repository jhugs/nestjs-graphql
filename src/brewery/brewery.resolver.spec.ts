import { Test, TestingModule } from '@nestjs/testing';
import { BreweryResolver } from './brewery.resolver';

describe('BreweryResolver', () => {
    let resolver: BreweryResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BreweryResolver],
        }).compile();

        resolver = module.get<BreweryResolver>(BreweryResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
