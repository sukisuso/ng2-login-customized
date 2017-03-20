import { Ng2LoginCustomizedPage } from './app.po';

describe('ng2-login-customized App', function() {
  let page: Ng2LoginCustomizedPage;

  beforeEach(() => {
    page = new Ng2LoginCustomizedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
