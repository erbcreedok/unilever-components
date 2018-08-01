import { UnileverPage } from './app.po';

describe('unilever App', () => {
  let page: UnileverPage;

  beforeEach(() => {
    page = new UnileverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
