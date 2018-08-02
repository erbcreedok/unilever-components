import { YerbolModule } from './yerbol.module';

describe('YerbolModule', () => {
  let yerbolModule: YerbolModule;

  beforeEach(() => {
    yerbolModule = new YerbolModule();
  });

  it('should create an instance', () => {
    expect(yerbolModule).toBeTruthy();
  });
});
