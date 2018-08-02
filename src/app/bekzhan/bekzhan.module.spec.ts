import { BekzhanModule } from './bekzhan.module';

describe('BekzhanModule', () => {
  let bekzhanModule: BekzhanModule;

  beforeEach(() => {
    bekzhanModule = new BekzhanModule();
  });

  it('should create an instance', () => {
    expect(bekzhanModule).toBeTruthy();
  });
});
