import { AwesomeMappingAppPage } from './app.po';

describe('awesome-mapping-app App', () => {
  let page: AwesomeMappingAppPage;

  beforeEach(() => {
    page = new AwesomeMappingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
