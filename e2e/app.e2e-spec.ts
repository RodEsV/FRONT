import { RusticstockPage } from './app.po';

describe('rusticstock App', function() {
  let page: RusticstockPage;

  beforeEach(() => {
    page = new RusticstockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
