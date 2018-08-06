import { UnileverUiModule } from './unilever-ui.module';

describe('UnileverUiModule', () => {
  let unileverUiModule: UnileverUiModule;

  beforeEach(() => {
    unileverUiModule = new UnileverUiModule();
  });

  it('should create an instance', () => {
    expect(unileverUiModule).toBeTruthy();
  });
});
