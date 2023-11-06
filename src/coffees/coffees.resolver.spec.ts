import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesResolver } from './coffees.resolver';

describe('CoffeesResolver', () => {
  let resolver: CoffeesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeesResolver],
    }).compile();

    resolver = module.get<CoffeesResolver>(CoffeesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
